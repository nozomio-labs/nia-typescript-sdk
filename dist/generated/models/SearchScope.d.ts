/**
 * Scope for searching Nia's indexed sources.
 */
export type SearchScope = {
    /**
     * Repository identifiers to search
     */
    repositories?: (Array<string> | null);
    /**
     * Documentation source IDs to search
     */
    data_sources?: (Array<string> | null);
};
