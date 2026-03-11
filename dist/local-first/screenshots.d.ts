/**
 * Screenshots adapter for local-first sync.
 *
 * Each screenshot becomes a metadata-only sync file. Binary screenshot
 * data is handled separately through the attachment encryption path.
 */
export interface LocalScreenshotRow {
    screenshotId: string;
    capturedAt?: number | null;
    width?: number | null;
    height?: number | null;
    filePath?: string | null;
    fileSize?: number | null;
    ocrText?: string | null;
}
export interface LocalScreenshotsCursor {
    lastCaptureTimestamp?: number;
}
export interface LocalScreenshotFile {
    path: string;
    content: string;
    metadata: {
        connectorType: "screenshots";
        connector_type: "screenshots";
        sourceSubtype: "screenshot";
        source_subtype: "screenshot";
        screenshotId: string;
        width: number;
        height: number;
        capturedAt: string | null;
        fileSize: number;
    };
}
export interface LocalScreenshotsSyncBatch {
    files: LocalScreenshotFile[];
    cursor: Required<LocalScreenshotsCursor>;
    stats: {
        extracted: number;
        chunks: number;
        dbType: "screenshots";
    };
}
export declare function buildLocalScreenshotsSyncBatch({ rows, cursor, }: {
    rows: LocalScreenshotRow[];
    cursor?: LocalScreenshotsCursor;
}): LocalScreenshotsSyncBatch;
