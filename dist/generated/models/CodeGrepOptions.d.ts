/**
 * Options used for code grep search.
 */
export type CodeGrepOptions = {
    /**
     * Whether search was case-sensitive
     */
    case_sensitive?: boolean;
    /**
     * Lines shown before each match
     */
    lines_before?: number;
    /**
     * Lines shown after each match
     */
    lines_after?: number;
    /**
     * Output mode used
     */
    output_mode?: string;
};
