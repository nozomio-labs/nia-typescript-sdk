import type { LocalSearchFilters, LocalSearchHit, LocalVectorStore, LocalVectorStoreRecord } from "./types";
export declare class MemoryLocalVectorStore implements LocalVectorStore {
    private readonly records;
    upsert(records: LocalVectorStoreRecord[]): Promise<void>;
    search(args: {
        embedding: number[];
        topK: number;
        filters?: LocalSearchFilters;
    }): Promise<LocalSearchHit[]>;
}
