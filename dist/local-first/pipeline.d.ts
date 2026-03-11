import type { LocalEmbeddingProvider, LocalIMessageCursor, LocalIMessageIndexResult, LocalIMessageRow, LocalIMessageSyncFilters, LocalVectorStore } from "./types";
interface IndexLocalIMessageBatchArgs {
    rows: LocalIMessageRow[];
    embedder: LocalEmbeddingProvider;
    vectorStore: LocalVectorStore;
    cursor?: LocalIMessageCursor;
    filters?: LocalIMessageSyncFilters;
    contactLookup?: Record<string, string>;
    now?: Date;
    windowMinutes?: number;
}
export declare function indexLocalIMessageBatch({ rows, embedder, vectorStore, cursor, filters, contactLookup, now, windowMinutes, }: IndexLocalIMessageBatchArgs): Promise<LocalIMessageIndexResult>;
export {};
