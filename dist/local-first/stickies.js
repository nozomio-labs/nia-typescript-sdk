/**
 * macOS Stickies adapter for local-first sync.
 *
 * Each sticky note becomes a single sync file with its content.
 */
export function buildLocalStickiesSyncBatch({ rows, cursor, }) {
    const norm = {
        lastSyncTimestamp: cursor?.lastSyncTimestamp ?? 0,
    };
    const files = [];
    let maxTs = norm.lastSyncTimestamp;
    for (const row of rows) {
        if (row.modifiedAt)
            maxTs = Math.max(maxTs, row.modifiedAt);
        const text = row.content?.trim();
        if (!text || text.length < 2)
            continue;
        const ts = row.modifiedAt
            ? new Date(row.modifiedAt * 1000).toISOString()
            : null;
        files.push({
            path: `stickies/${row.stickyId}.txt`,
            content: text,
            metadata: {
                connectorType: "stickies",
                connector_type: "stickies",
                sourceSubtype: "file",
                source_subtype: "file",
                stickyId: row.stickyId,
                sticky_id: row.stickyId,
                timestamp: ts,
            },
        });
    }
    return {
        files,
        cursor: { lastSyncTimestamp: maxTs || Math.floor(Date.now() / 1000) },
        stats: {
            extracted: files.length,
            chunks: files.length,
            dbType: "stickies",
        },
    };
}
