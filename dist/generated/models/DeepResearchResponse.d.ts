/**
 * Response for deep research.
 */
export type DeepResearchResponse = {
    /**
     * Structured research data
     */
    data?: (Record<string, any> | null);
    /**
     * Citations with URLs
     */
    citations?: null;
    /**
     * Research task status
     */
    status?: string;
    /**
     * Verbose trace events
     */
    trace?: null;
};
