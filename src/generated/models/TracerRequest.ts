/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TracerRequest = {
    /**
     * Research question
     */
    query: string;
    /**
     * Repositories in owner/repo format
     */
    repositories?: (Array<string> | null);
    /**
     * Additional context
     */
    context?: (string | null);
    /**
     * Model override (claude-opus-4-6 or claude-opus-4-6-1m)
     */
    model?: (string | null);
};

