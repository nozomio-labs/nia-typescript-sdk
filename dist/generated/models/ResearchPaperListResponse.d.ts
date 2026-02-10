import type { ResearchPaperItem } from './ResearchPaperItem';
/**
 * Response for listing research papers.
 */
export type ResearchPaperListResponse = {
    /**
     * List of papers
     */
    papers?: Array<ResearchPaperItem>;
    /**
     * Total number of papers
     */
    total: number;
    /**
     * Limit used
     */
    limit?: (number | null);
    /**
     * Offset used
     */
    offset?: (number | null);
};
