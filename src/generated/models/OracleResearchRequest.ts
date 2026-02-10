/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OracleResearchRequest = {
    /**
     * Research question to investigate
     */
    query: string;
    /**
     * Optional list of repository identifiers
     */
    repositories?: (Array<string> | null);
    /**
     * Optional list of documentation source identifiers
     */
    data_sources?: (Array<string> | null);
    /**
     * Optional output format specification
     */
    output_format?: (string | null);
    /**
     * Model to use: claude-opus-4-6, claude-opus-4-6-1m, claude-sonnet-4-5-20250929, or claude-sonnet-4-5-1m
     */
    model?: (string | null);
};

