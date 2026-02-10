export type DeepResearchRequest = {
    /**
     * Research question
     */
    query: string;
    /**
     * Optional structure hint
     */
    output_format?: (string | null);
    /**
     * Include verbose trace output
     */
    verbose?: boolean;
};
