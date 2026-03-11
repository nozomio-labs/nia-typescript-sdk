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
    stats: {
        extracted: number;
        chunks: number;
        dbType: "notes";
    };
}
export declare function buildLocalNotesSyncBatch({ rows, cursor, }: {
    rows: LocalNotesRow[];
    cursor?: LocalNotesCursor;
}): LocalNotesSyncBatch;
