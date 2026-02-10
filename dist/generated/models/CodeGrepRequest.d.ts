/**
 * Request model for code grep search with advanced options.
 */
export type CodeGrepRequest = {
    /**
     * Regex pattern to search for
     */
    pattern: string;
    /**
     * Limit search to this file path prefix
     */
    path?: string;
    /**
     * Git ref to target (branch, tag, or commit). Useful when multiple versions are indexed.
     */
    ref?: (string | null);
    /**
     * Lines before AND after
     */
    context_lines?: (number | null);
    /**
     * Lines after each match
     */
    'A'?: (number | null);
    /**
     * Lines before each match
     */
    'B'?: (number | null);
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
     * Max matches per file
     */
    max_matches_per_file?: number;
    /**
     * Max total matches
     */
    max_total_matches?: number;
    /**
     * Output mode
     */
    output_mode?: 'content' | 'files_with_matches' | 'count';
    /**
     * Add >>markers<< around matched text
     */
    highlight?: boolean;
    /**
     * Include line numbers
     */
    include_line_numbers?: boolean;
    /**
     * Group matches by file
     */
    group_by_file?: boolean;
    /**
     * Search ALL chunks for complete results
     */
    exhaustive?: boolean;
};
