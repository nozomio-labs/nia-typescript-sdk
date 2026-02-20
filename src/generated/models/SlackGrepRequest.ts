/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SlackGrepRequest = {
    /**
     * Search string for BM25 keyword matching
     */
    pattern: string;
    /**
     * Filter by channel name or ID
     */
    channel?: (string | null);
    /**
     * Max results
     */
    limit?: number;
};

