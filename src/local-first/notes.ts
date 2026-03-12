/**
 * Apple Notes adapter for local-first sync.
 *
 * Reads from the CloudKit-backed NoteStore.sqlite database on macOS.
 * Each note becomes a single sync file with its title and body content.
 */

export interface LocalNotesRow {
  noteId: number;
  title?: string | null;
  body?: string | null;
  createdAt?: number | null;
  modifiedAt?: number | null;
  folderName?: string | null;
  accountName?: string | null;
}

export interface LocalNotesCursor {
  lastNoteId?: number;
  lastModifiedAt?: number;
}

export interface LocalNotesFile {
  path: string;
  content: string;
  metadata: {
    dbType: "notes";
    sourceSubtype: "database";
    connectorType: "notes";
    db_type: "notes";
    source_subtype: "database";
    connector_type: "notes";
    noteId: number;
    title: string;
    folderName: string;
    createdAt: string | null;
    modifiedAt: string | null;
  };
}

export interface LocalNotesSyncBatch {
  files: LocalNotesFile[];
  cursor: Required<LocalNotesCursor>;
  stats: { extracted: number; chunks: number; dbType: "notes" };
}

function sanitize(s: string): string {
  return s.replace(/[^\w\-_]/g, "_").slice(0, 60) || "untitled";
}

function cocoaToIso(ts: number | null | undefined): string | null {
  if (!ts) return null;
  const ms = (ts + 978307200) * 1000;
  const d = new Date(ms);

  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

export function buildLocalNotesSyncBatch({
  rows,
  cursor,
}: {
  rows: LocalNotesRow[];
  cursor?: LocalNotesCursor;
}): LocalNotesSyncBatch {
  const norm: Required<LocalNotesCursor> = {
    lastNoteId: cursor?.lastNoteId ?? 0,
    lastModifiedAt: cursor?.lastModifiedAt ?? 0,
  };

  const files: LocalNotesFile[] = [];
  let maxId = norm.lastNoteId;
  let maxMod = norm.lastModifiedAt;

  const sorted = [...rows].sort((a, b) => a.noteId - b.noteId);

  for (const row of sorted) {
    maxId = Math.max(maxId, row.noteId);
    if (row.modifiedAt) maxMod = Math.max(maxMod, row.modifiedAt);

    if (row.noteId <= norm.lastNoteId) continue;

    const title = row.title?.trim() || "Untitled";
    const body = row.body?.trim();

    if (!body || body.length < 2) continue;

    const folder = row.folderName ?? "Notes";
    const created = cocoaToIso(row.createdAt);
    const modified = cocoaToIso(row.modifiedAt);

    files.push({
      path: `notes/${sanitize(folder)}/${sanitize(title)}_${row.noteId}.txt`,
      content: `# ${title}\n\n${body}`,
      metadata: {
        dbType: "notes",
        sourceSubtype: "database",
        connectorType: "notes",
        db_type: "notes",
        source_subtype: "database",
        connector_type: "notes",
        noteId: row.noteId,
        title,
        folderName: folder,
        createdAt: created,
        modifiedAt: modified,
      },
    });
  }

  return {
    files,
    cursor: { lastNoteId: maxId, lastModifiedAt: maxMod },
    stats: { extracted: files.length, chunks: files.length, dbType: "notes" },
  };
}
