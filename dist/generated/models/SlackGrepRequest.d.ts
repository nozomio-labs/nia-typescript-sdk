export type SlackGrepRequest = {
    /**
     * Search string for BM25 keyword matching
     */
    pattern: string;
    /**
     * Filter by channel name or ID
     */
    channel?: (string | null);
    /**
     * Max results
     */
    limit?: number;
};
