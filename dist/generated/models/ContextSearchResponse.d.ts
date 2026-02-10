/**
 * Response for text search in contexts.
 */
export type ContextSearchResponse = {
    /**
     * Matching contexts
     */
    contexts?: Array<Record<string, any>>;
    /**
     * The search query used
     */
    search_query: string;
    /**
     * Total number of results
     */
    total_results?: number;
};
