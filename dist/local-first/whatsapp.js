/**
 * WhatsApp SQLite adapter for local-first sync.
 *
 * Follows the same pattern as imessage.ts: extract rows from local
 * WhatsApp SQLite DB, group into conversation chunks, and produce
 * a sync batch ready for `DaemonClient.pushSync()` or E2E upload.
 */
import { matchesIMessageFilters, normalizeContactIdentifier } from "./filters";
function sanitize(name) {
    return name.replace(/[^\w\-_]/g, "_").slice(0, 50) || "unknown";
}
function resolveContact(raw, lookup) {
    const norm = normalizeContactIdentifier(raw);
    return lookup[norm] ?? lookup[raw] ?? raw;
}
function tsToIso(ts) {
    if (!ts)
        return null;
    const ms = ts > 1e12 ? ts : ts * 1000;
    const d = new Date(ms);
    return Number.isNaN(d.getTime()) ? null : d.toISOString();
}
function buildConversationChunk(chatId, messages) {
    if (messages.length === 1)
        return messages[0];
    const first = messages[0];
    const last = messages[messages.length - 1];
    const chatName = first.metadata.chatName;
    const datePrefix = first.metadata.timestamp?.slice(0, 10) ?? "unknown";
    const participants = [
        ...new Set(messages.map((m) => m.metadata.contact)),
    ].sort();
    const transcript = [
        `[WhatsApp chat: ${chatName}, ${datePrefix}]`,
        "",
        ...messages.map((m) => m.content),
    ].join("\n");
    return {
        path: `whatsapp/${sanitize(chatName)}/${datePrefix}_conv_${first.metadata.messageId}_${last.metadata.messageId}.txt`,
        content: transcript,
        metadata: {
            ...first.metadata,
            conversationId: chatId,
            conversation_id: chatId,
            participants,
            messageCount: messages.length,
            message_count: messages.length,
            isConversationChunk: true,
            is_conversation_chunk: true,
        },
    };
}
function groupIntoConversations(files, windowMinutes) {
    const groups = new Map();
    for (const f of files) {
        const key = f.metadata.chatId;
        const arr = groups.get(key) ?? [];
        arr.push(f);
        groups.set(key, arr);
    }
    const result = [];
    for (const [chatId, msgs] of groups.entries()) {
        msgs.sort((a, b) => (a.metadata.timestamp ?? "").localeCompare(b.metadata.timestamp ?? ""));
        let window = [];
        let windowStart = null;
        for (const msg of msgs) {
            const ts = msg.metadata.timestamp
                ? new Date(msg.metadata.timestamp)
                : null;
            if (window.length &&
                ts &&
                windowStart &&
                (ts.getTime() - windowStart.getTime()) / 1000 > windowMinutes * 60) {
                result.push(buildConversationChunk(chatId, window));
                window = [];
                windowStart = null;
            }
            window.push(msg);
            if (ts && !Number.isNaN(ts.getTime())) {
                if (!windowStart || ts.getTime() < windowStart.getTime())
                    windowStart = ts;
            }
        }
        if (window.length)
            result.push(buildConversationChunk(chatId, window));
    }
    return result;
}
export function buildLocalWhatsAppSyncBatch({ rows, cursor, filters, contactLookup = {}, windowMinutes = 30, }) {
    const normalizedCursor = {
        lastMessageId: cursor?.lastMessageId ?? 0,
        lastTimestamp: cursor?.lastTimestamp ?? 0,
    };
    const normalizedLookup = Object.fromEntries(Object.entries(contactLookup).map(([k, v]) => [
        normalizeContactIdentifier(k),
        v,
    ]));
    const files = [];
    let maxId = normalizedCursor.lastMessageId;
    let maxTs = normalizedCursor.lastTimestamp;
    const sorted = [...rows].sort((a, b) => a.messageId - b.messageId);
    for (const row of sorted) {
        maxId = Math.max(maxId, row.messageId);
        if (row.timestamp)
            maxTs = Math.max(maxTs, row.timestamp);
        if (row.messageId <= normalizedCursor.lastMessageId)
            continue;
        const text = row.text?.trim();
        if (!text || text.length < 2)
            continue;
        const canonicalContact = row.senderPhone ?? row.senderName ?? "unknown";
        const contactName = resolveContact(row.senderName ?? canonicalContact, normalizedLookup);
        const chatId = row.chatId ?? "unknown";
        const chatName = row.chatName ?? chatId;
        const timestamp = tsToIso(row.timestamp);
        const datePrefix = timestamp?.slice(0, 10) ?? "unknown";
        const senderRole = row.isFromMe ? "self" : "contact";
        const content = row.isFromMe
            ? `[You → ${chatName}, ${datePrefix}] ${text}`
            : `[${contactName} → ${chatName}, ${datePrefix}] ${text}`;
        const file = {
            path: `whatsapp/${sanitize(chatName)}/${datePrefix}_${row.messageId}.txt`,
            content,
            metadata: {
                dbType: "whatsapp",
                sourceSubtype: "database",
                connectorType: "whatsapp",
                db_type: "whatsapp",
                source_subtype: "database",
                connector_type: "whatsapp",
                messageId: row.messageId,
                timestamp,
                contact: contactName,
                contactId: canonicalContact,
                contact_id: canonicalContact,
                chatId,
                chat_id: chatId,
                chatName,
                conversationId: chatId,
                conversation_id: chatId,
                senderRole,
                sender_role: senderRole,
                isFromMe: Boolean(row.isFromMe),
                isGroupChat: Boolean(row.isGroupChat),
                is_group_chat: Boolean(row.isGroupChat),
                senderName: row.senderName,
                senderPhone: row.senderPhone,
            },
        };
        if (filters) {
            const filterMeta = {
                ...file.metadata,
                rowId: row.messageId,
            };
            if (!matchesIMessageFilters(filterMeta, filters, new Date()))
                continue;
        }
        files.push(file);
    }
    const grouped = groupIntoConversations(files, windowMinutes);
    return {
        files: grouped,
        cursor: { lastMessageId: maxId, lastTimestamp: maxTs },
        stats: {
            extracted: files.length,
            chunks: grouped.length,
            dbType: "whatsapp",
        },
    };
}
