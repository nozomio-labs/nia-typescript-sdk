/**
 * Apple Reminders adapter for local-first sync.
 *
 * Each reminder item becomes a sync file with title, notes, due date,
 * and completion status.
 */
export interface LocalReminderRow {
    reminderId: string;
    title?: string | null;
    notes?: string | null;
    dueDate?: number | null;
    completedAt?: number | null;
    isCompleted?: boolean;
    listName?: string | null;
    priority?: number | null;
    modifiedAt?: number | null;
}
export interface LocalRemindersCursor {
    lastSyncTimestamp?: number;
}
export interface LocalReminderFile {
    path: string;
    content: string;
    metadata: {
        connectorType: "reminders";
        connector_type: "reminders";
        sourceSubtype: "database";
        source_subtype: "database";
        reminderId: string;
        reminder_id: string;
        listName: string;
        isCompleted: boolean;
        timestamp: string | null;
    };
}
export interface LocalRemindersSyncBatch {
    files: LocalReminderFile[];
    cursor: Required<LocalRemindersCursor>;
    stats: {
        extracted: number;
        chunks: number;
        dbType: "reminders";
    };
}
export declare function buildLocalRemindersSyncBatch({ rows, cursor, }: {
    rows: LocalReminderRow[];
    cursor?: LocalRemindersCursor;
}): LocalRemindersSyncBatch;
