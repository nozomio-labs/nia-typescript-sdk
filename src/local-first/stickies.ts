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
  stats: { extracted: number; chunks: number; dbType: "stickies" };
}

export function buildLocalStickiesSyncBatch({
  rows,
  cursor,
}: {
  rows: LocalStickyRow[];
  cursor?: LocalStickiesCursor;
}): LocalStickiesSyncBatch {
  const norm: Required<LocalStickiesCursor> = {
    lastSyncTimestamp: cursor?.lastSyncTimestamp ?? 0,
  };

  const files: LocalStickyFile[] = [];
  let maxTs = norm.lastSyncTimestamp;

  for (const row of rows) {
    if (row.modifiedAt) maxTs = Math.max(maxTs, row.modifiedAt);

    const text = row.content?.trim();
    if (!text || text.length < 2) continue;

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
    stats: { extracted: files.length, chunks: files.length, dbType: "stickies" },
  };
}
