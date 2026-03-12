/**
 * Apple Contacts adapter for local-first sync.
 *
 * Each contact card becomes a single sync file containing the
 * contact's name, organization, emails, and phone numbers.
 */
function sanitize(s) {
    return s.replace(/[^\w\-_]/g, "_").slice(0, 60) || "unknown";
}
export function buildLocalContactsSyncBatch({ rows, cursor, }) {
    const norm = {
        lastSyncTimestamp: cursor?.lastSyncTimestamp ?? 0,
    };
    const files = [];
    let maxTs = norm.lastSyncTimestamp;
    for (const row of rows) {
        if (row.modifiedAt)
            maxTs = Math.max(maxTs, row.modifiedAt);
        const first = row.firstName?.trim() ?? "";
        const last = row.lastName?.trim() ?? "";
        const org = row.organization?.trim() ?? "";
        const fullName = [first, last].filter(Boolean).join(" ") || org || "Unknown";
        const lines = [`Name: ${fullName}`];
        if (org)
            lines.push(`Organization: ${org}`);
        if (row.emails?.length)
            lines.push(`Emails: ${row.emails.join(", ")}`);
        if (row.phoneNumbers?.length)
            lines.push(`Phones: ${row.phoneNumbers.join(", ")}`);
        files.push({
            path: `contacts/${sanitize(fullName)}_${row.contactId}.txt`,
            content: lines.join("\n"),
            metadata: {
                connectorType: "contacts",
                connector_type: "contacts",
                sourceSubtype: "file",
                source_subtype: "file",
                contactId: row.contactId,
                contact_id: row.contactId,
                firstName: first,
                lastName: last,
                organization: org,
            },
        });
    }
    return {
        files,
        cursor: { lastSyncTimestamp: maxTs || Math.floor(Date.now() / 1000) },
        stats: {
            extracted: files.length,
            chunks: files.length,
            dbType: "contacts",
        },
    };
}
