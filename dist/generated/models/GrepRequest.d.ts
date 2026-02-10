/**
 * Request model for documentation grep search with advanced options.
 */
export type GrepRequest = {
    /**
     * Regex pattern to search for
     */
    pattern: string;
    /**
     * Limit search to this virtual path prefix
     */
    path?: string;
    /**
     * Filter to specific tree section (for PDFs with tree index)
     */
    tree_node_id?: (string | null);
    /**
     * Filter by page range start (for PDFs)
     */
    page_start?: (number | null);
    /**
     * Filter by page range end (for PDFs)
     */
    page_end?: (number | null);
    /**
     * Lines before AND after (shorthand, overridden by A/B)
     */
    context_lines?: (number | null);
    /**
     * Lines after each match (like grep -A)
     */
    'A'?: (number | null);
    /**
     * Lines before each match (like grep -B)
     */
    'B'?: (number | null);
    /**
     * Case-sensitive matching (default: insensitive)
     */
    case_sensitive?: boolean;
    /**
     * Match whole words only
     */
    whole_word?: boolean;
    /**
     * Treat pattern as literal string, not regex
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
     * Output: 'content' (matches), 'files_with_matches' (paths), 'count' (counts)
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
     * Search ALL chunks for complete results (default: True). Set to False for faster but potentially incomplete BM25-based search.
     */
    exhaustive?: boolean;
};
