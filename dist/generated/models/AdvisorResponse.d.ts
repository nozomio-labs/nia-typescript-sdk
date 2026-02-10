/**
 * Response model for advisor endpoint.
 */
export type AdvisorResponse = {
    /**
     * Tailored advice
     */
    advice: string;
    /**
     * Number of sources searched
     */
    sources_searched?: number;
    output_format?: string;
};
