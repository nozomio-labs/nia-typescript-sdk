/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebSearchDocumentation } from './WebSearchDocumentation';
import type { WebSearchGitHubRepo } from './WebSearchGitHubRepo';
import type { WebSearchOtherContent } from './WebSearchOtherContent';
/**
 * Response for web search.
 */
export type WebSearchResponse = {
    /**
     * GitHub repositories found
     */
    github_repos?: Array<WebSearchGitHubRepo>;
    /**
     * Documentation pages found
     */
    documentation?: Array<WebSearchDocumentation>;
    /**
     * Other content found
     */
    other_content?: Array<WebSearchOtherContent>;
    /**
     * Total number of results
     */
    total_results?: number;
};

