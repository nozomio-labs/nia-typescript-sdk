export type GrepRequestBody = {
    /**
     * Regex pattern
     */
    pattern: string;
    /**
     * Path prefix filter
     */
    path?: string;
    case_sensitive?: boolean;
    whole_word?: boolean;
    fixed_string?: boolean;
    max_total_matches?: number;
    max_matches_per_file?: number;
    context_lines?: number;
    lines_before?: (number | null);
    lines_after?: (number | null);
    highlight?: boolean;
    include_line_numbers?: boolean;
    /**
     * content|files_with_matches|count
     */
    output_mode?: string;
    multiline_content?: boolean;
};
