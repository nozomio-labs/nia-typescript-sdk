import { matchesIMessageFilters, normalizeContactIdentifier } from "./filters";
function resolveContactName(rawContact, contactLookup) {
    const normalized = normalizeContactIdentifier(rawContact);
    return contactLookup[normalized] ?? contactLookup[rawContact] ?? rawContact;
}
function appleDateToParts(appleDate) {
    if (!appleDate) {
        return {
            timestamp: null,
            datePrefix: "unknown",
            timeDisplay: "",
        };
    }
    const unixMilliseconds = (appleDate / 1_000_000_000 + 978307200) * 1000;
    const date = new Date(unixMilliseconds);
    if (Number.isNaN(date.getTime())) {
        return {
            timestamp: null,
            datePrefix: "unknown",
            timeDisplay: "",
        };
    }
    const isoTimestamp = date.toISOString();
    return {
        timestamp: isoTimestamp,
        datePrefix: isoTimestamp.slice(0, 10),
        timeDisplay: isoTimestamp.slice(11, 16),
    };
}
function sanitizeContact(contactName) {
    return contactName.replace(/[^\w\-_]/g, "_").slice(0, 50) || "unknown";
}
function isAfterCursor(row, cursor) {
    return row.rowId > cursor.lastRowId;
}
function buildConversationChunk(conversationId, messages) {
    if (messages.length === 1) {
        return messages[0];
    }
    const first = messages[0];
    const last = messages[messages.length - 1];
    const contactName = first.metadata.contact;
    const datePrefix = first.metadata.timestamp?.slice(0, 10) ?? "unknown";
    const participants = [...new Set(messages.map((message) => message.metadata.contact))].sort();
    const senderRoles = [
        ...new Set(messages.map((message) => message.metadata.senderRole)),
    ].sort();
    const transcript = [
        `[Conversation with ${contactName}, ${datePrefix}]`,
        "",
        ...messages.map((message) => message.content),
    ].join("\n");
    return {
        path: `messages/${sanitizeContact(contactName)}/${datePrefix}_conv_${first.metadata.rowId}_${last.metadata.rowId}.txt`,
        content: transcript,
        metadata: {
            ...first.metadata,
            conversationId,
            conversation_id: conversationId,
            participants,
            messageCount: messages.length,
            message_count: messages.length,
            senderRoles,
            sender_roles: senderRoles,
            timeRangeStart: first.metadata.timestamp,
            timeRangeEnd: last.metadata.timestamp,
            time_range_start: first.metadata.timestamp,
            time_range_end: last.metadata.timestamp,
            isConversationChunk: true,
            is_conversation_chunk: true,
        },
    };
}
function groupMessagesIntoConversations(files, windowMinutes) {
    const groupedByConversation = new Map();
    for (const file of files) {
        const conversationId = file.metadata.conversationId;
        const current = groupedByConversation.get(conversationId) ?? [];
        current.push(file);
        groupedByConversation.set(conversationId, current);
    }
    const grouped = [];
    for (const [conversationId, messages] of groupedByConversation.entries()) {
        messages.sort((left, right) => (left.metadata.timestamp ?? "").localeCompare(right.metadata.timestamp ?? ""));
        let windowMessages = [];
        let windowStart = null;
        for (const message of messages) {
            const timestamp = message.metadata.timestamp
                ? new Date(message.metadata.timestamp)
                : null;
            if (windowMessages.length &&
                timestamp &&
                windowStart &&
                (timestamp.getTime() - windowStart.getTime()) / 1000 > windowMinutes * 60) {
                grouped.push(buildConversationChunk(conversationId, windowMessages));
                windowMessages = [];
                windowStart = null;
            }
            windowMessages.push(message);
            if (timestamp && !Number.isNaN(timestamp.getTime())) {
                if (!windowStart || timestamp.getTime() < windowStart.getTime()) {
                    windowStart = timestamp;
                }
            }
        }
        if (windowMessages.length) {
            grouped.push(buildConversationChunk(conversationId, windowMessages));
        }
    }
    return grouped;
}
export function buildLocalIMessageSyncBatch({ rows, cursor, filters, contactLookup = {}, now = new Date(), windowMinutes = 30, }) {
    const normalizedCursor = {
        lastRowId: cursor?.lastRowId ?? 0,
        lastTimestamp: cursor?.lastTimestamp ?? 0,
    };
    const normalizedLookup = Object.fromEntries(Object.entries(contactLookup).map(([key, value]) => [
        normalizeContactIdentifier(key),
        value,
    ]));
    const files = [];
    let maxRowId = normalizedCursor.lastRowId;
    let maxTimestamp = normalizedCursor.lastTimestamp;
    const sortedRows = [...rows].sort((left, right) => left.rowId - right.rowId);
    for (const row of sortedRows) {
        maxRowId = Math.max(maxRowId, row.rowId);
        if (row.appleDate) {
            maxTimestamp = Math.max(maxTimestamp, row.appleDate);
        }
        if (!isAfterCursor(row, normalizedCursor)) {
            continue;
        }
        const text = row.text?.trim() ? row.text : row.attributedBodyText;
        if (!text || text.trim().length < 2) {
            continue;
        }
        const canonicalContact = row.contactId ?? "unknown";
        const contactDisplay = row.contactDisplay ?? canonicalContact;
        const contactName = resolveContactName(contactDisplay, normalizedLookup);
        const { timestamp, datePrefix, timeDisplay } = appleDateToParts(row.appleDate);
        const senderRole = row.isFromMe ? "self" : "contact";
        const conversationId = row.threadOriginatorGuid ?? canonicalContact ?? "unknown";
        const content = row.isFromMe
            ? `[You → ${contactName}, ${datePrefix} ${timeDisplay}] ${text}`
            : `[${contactName} → You, ${datePrefix} ${timeDisplay}] ${text}`;
        const file = {
            path: `messages/${sanitizeContact(contactName)}/${datePrefix}_${row.rowId}_${row.isFromMe ? "sent" : "received"}.txt`,
            content,
            metadata: {
                dbType: "imessage",
                sourceSubtype: "database",
                connectorType: "imessage",
                db_type: "imessage",
                source_subtype: "database",
                connector_type: "imessage",
                rowId: row.rowId,
                timestamp,
                contact: contactName,
                contactId: canonicalContact,
                contact_id: canonicalContact,
                conversationId,
                conversation_id: conversationId,
                senderRole,
                sender_role: senderRole,
                isFromMe: Boolean(row.isFromMe),
                service: row.service,
                threadId: row.threadOriginatorGuid,
            },
        };
        if (!matchesIMessageFilters(file.metadata, filters, now)) {
            continue;
        }
        files.push(file);
    }
    const groupedFiles = groupMessagesIntoConversations(files, windowMinutes);
    return {
        files: groupedFiles,
        cursor: {
            lastRowId: maxRowId,
            lastTimestamp: maxTimestamp,
        },
        stats: {
            extracted: files.length,
            chunks: groupedFiles.length,
            dbType: "imessage",
        },
    };
}
