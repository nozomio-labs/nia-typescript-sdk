/**
 * Represents a search query performed during the conversation.
 */
export type routes__v2__contexts__SearchQuery = {
    /**
     * The search query that was performed
     */
    query: string;
    /**
     * Type: 'codebase', 'documentation', etc.
     */
    query_type: string;
    resources_searched?: Array<string>;
    /**
     * Brief summary of what was found
     */
    key_findings: string;
    useful_results_count?: number;
};
