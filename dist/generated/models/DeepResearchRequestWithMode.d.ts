export type DeepResearchRequestWithMode = {
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
    /**
     * Search mode discriminator
     */
    mode?: string;
};
