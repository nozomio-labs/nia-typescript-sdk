/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A GitHub repository from web search.
 */
export type WebSearchGitHubRepo = {
    /**
     * Repository URL
     */
    url: string;
    /**
     * owner/repo identifier
     */
    owner_repo: string;
    /**
     * Repository title
     */
    title: string;
    /**
     * Repository summary
     */
    summary?: string;
    /**
     * Search highlights
     */
    highlights?: Array<string>;
    /**
     * Publication date
     */
    published_date?: (string | null);
};

