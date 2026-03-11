/**
 * Apple Reminders adapter for local-first sync.
 *
 * Each reminder item becomes a sync file with title, notes, due date,
 * and completion status.
 */
function sanitize(s) {
    return s.replace(/[^\w\-_]/g, "_").slice(0, 60) || "untitled";
}
function cocoaToIso(ts) {
    if (!ts)
        return null;
    const ms = (ts + 978307200) * 1000;
    const d = new Date(ms);
    return Number.isNaN(d.getTime()) ? null : d.toISOString();
}
export function buildLocalRemindersSyncBatch({ rows, cursor, }) {
    const norm = {
        lastSyncTimestamp: cursor?.lastSyncTimestamp ?? 0,
    };
    const files = [];
    let maxTs = norm.lastSyncTimestamp;
    for (const row of rows) {
        if (row.modifiedAt)
            maxTs = Math.max(maxTs, row.modifiedAt);
        const title = row.title?.trim();
        if (!title)
            continue;
        const list = row.listName ?? "Reminders";
        const lines = [`Reminder: ${title}`];
        lines.push(`List: ${list}`);
        lines.push(`Status: ${row.isCompleted ? "Completed" : "Pending"}`);
        if (row.notes?.trim())
            lines.push(`Notes: ${row.notes.trim()}`);
        if (row.dueDate)
            lines.push(`Due: ${cocoaToIso(row.dueDate) ?? "Unknown"}`);
        if (row.priority && row.priority > 0)
            lines.push(`Priority: ${row.priority}`);
        const modified = cocoaToIso(row.modifiedAt);
        files.push({
            path: `reminders/${sanitize(list)}/${sanitize(title)}_${row.reminderId}.txt`,
            content: lines.join("\n"),
            metadata: {
                connectorType: "reminders",
                connector_type: "reminders",
                sourceSubtype: "database",
                source_subtype: "database",
                reminderId: row.reminderId,
                reminder_id: row.reminderId,
                listName: list,
                isCompleted: Boolean(row.isCompleted),
                timestamp: modified,
            },
        });
    }
    return {
        files,
        cursor: { lastSyncTimestamp: maxTs || Math.floor(Date.now() / 1000) },
        stats: { extracted: files.length, chunks: files.length, dbType: "reminders" },
    };
}
