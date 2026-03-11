import type { LocalIMessageCursor, LocalIMessageRow, LocalIMessageSyncBatch, LocalIMessageSyncFilters } from "./types";
interface BuildLocalIMessageSyncBatchArgs {
    rows: LocalIMessageRow[];
    cursor?: LocalIMessageCursor;
    filters?: LocalIMessageSyncFilters;
    contactLookup?: Record<string, string>;
    now?: Date;
    windowMinutes?: number;
}
export declare function buildLocalIMessageSyncBatch({ rows, cursor, filters, contactLookup, now, windowMinutes, }: BuildLocalIMessageSyncBatchArgs): LocalIMessageSyncBatch;
export {};
