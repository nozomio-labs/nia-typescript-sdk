/**
 * macOS Stickies adapter for local-first sync.
 *
 * Each sticky note becomes a single sync file with its content.
 */
export interface LocalStickyRow {
    stickyId: string;
    content?: string | null;
    modifiedAt?: number | null;
    color?: string | null;
}
export interface LocalStickiesCursor {
    lastSyncTimestamp?: number;
}
export interface LocalStickyFile {
    path: string;
    content: string;
    metadata: {
        connectorType: "stickies";
        connector_type: "stickies";
        sourceSubtype: "file";
        source_subtype: "file";
        stickyId: string;
        sticky_id: string;
        timestamp: string | null;
    };
}
export interface LocalStickiesSyncBatch {
    files: LocalStickyFile[];
    cursor: Required<LocalStickiesCursor>;
    stats: {
        extracted: number;
        chunks: number;
        dbType: "stickies";
    };
}
export declare function buildLocalStickiesSyncBatch({ rows, cursor, }: {
    rows: LocalStickyRow[];
    cursor?: LocalStickiesCursor;
}): LocalStickiesSyncBatch;
