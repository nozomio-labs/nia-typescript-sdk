/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A single grep match.
 */
export type GrepMatch = {
    /**
     * Path to the file
     */
    file_path: string;
    /**
     * Line number of the match
     */
    line_number: number;
    /**
     * Content of the matching line
     */
    line_content: string;
    /**
     * Lines before the match
     */
    context_before?: (Array<string> | null);
    /**
     * Lines after the match
     */
    context_after?: (Array<string> | null);
};

