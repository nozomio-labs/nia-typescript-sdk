/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WebSearchRequest = {
    /**
     * Search query
     */
    query: string;
    /**
     * Number of results
     */
    num_results?: number;
    /**
     * Filter by category: github, company, research, news, tweet, pdf, blog
     */
    category?: (string | null);
    /**
     * Only show results from last N days
     */
    days_back?: (number | null);
    /**
     * URL to find similar content to
     */
    find_similar_to?: (string | null);
};

