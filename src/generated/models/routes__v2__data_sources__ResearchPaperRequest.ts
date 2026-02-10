/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request model for indexing a research paper (arXiv).
 */
export type routes__v2__data_sources__ResearchPaperRequest = {
    /**
     * arXiv URL or raw ID (e.g., '2312.00752', 'https://arxiv.org/abs/2312.00752')
     */
    url: string;
    /**
     * Organization ID for team-level indexing
     */
    organization_id?: (string | null);
    /**
     * Add to global shared pool (default: True). Set False for private indexing.
     */
    add_as_global_source?: boolean;
};

