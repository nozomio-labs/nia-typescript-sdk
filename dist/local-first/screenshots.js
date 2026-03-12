/**
 * Screenshots adapter for local-first sync.
 *
 * Each screenshot becomes a metadata-only sync file. Binary screenshot
 * data is handled separately through the attachment encryption path.
 */
export function buildLocalScreenshotsSyncBatch({ rows, cursor, }) {
    const norm = {
        lastCaptureTimestamp: cursor?.lastCaptureTimestamp ?? 0,
    };
    const files = [];
    let maxTs = norm.lastCaptureTimestamp;
    for (const row of rows) {
        const capturedTs = row.capturedAt ?? 0;
        maxTs = Math.max(maxTs, capturedTs);
        if (capturedTs <= norm.lastCaptureTimestamp)
            continue;
        const capturedIso = capturedTs
            ? new Date(capturedTs * 1000).toISOString()
            : null;
        const datePrefix = capturedIso?.slice(0, 10) ?? "unknown";
        const content = row.ocrText?.trim()
            ? `Screenshot (${datePrefix}): ${row.ocrText.trim()}`
            : `Screenshot captured at ${capturedIso ?? "unknown"} (${row.width ?? 0}x${row.height ?? 0})`;
        files.push({
            path: `screenshots/${datePrefix}/${row.screenshotId}.txt`,
            content,
            metadata: {
                connectorType: "screenshots",
                connector_type: "screenshots",
                sourceSubtype: "screenshot",
                source_subtype: "screenshot",
                screenshotId: row.screenshotId,
                width: row.width ?? 0,
                height: row.height ?? 0,
                capturedAt: capturedIso,
                fileSize: row.fileSize ?? 0,
            },
        });
    }
    return {
        files,
        cursor: { lastCaptureTimestamp: maxTs },
        stats: {
            extracted: files.length,
            chunks: files.length,
            dbType: "screenshots",
        },
    };
}
