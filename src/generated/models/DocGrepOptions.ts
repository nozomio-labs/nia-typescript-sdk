/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Options used for grep search.
 */
export type DocGrepOptions = {
    /**
     * Case-sensitive matching
     */
    case_sensitive?: boolean;
    /**
     * Match whole words only
     */
    whole_word?: boolean;
    /**
     * Treat pattern as literal string
     */
    fixed_string?: boolean;
    /**
     * Lines of context before match
     */
    lines_before?: number;
    /**
     * Lines of context after match
     */
    lines_after?: number;
    /**
     * Maximum matches per file
     */
    max_matches_per_file?: number;
    /**
     * Maximum total matches
     */
    max_total_matches?: number;
    /**
     * Output mode
     */
    output_mode?: string;
    /**
     * Highlight matches
     */
    highlight?: boolean;
};

