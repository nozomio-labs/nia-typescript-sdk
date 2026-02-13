/**
 * A single line match within a documentation file.
 */
export type DocGrepMatchDetail = {
    /**
     * The matching line content
     */
    line: string;
    /**
     * Context lines around the match
     */
    context?: Array<string>;
    /**
     * Starting line number of context
     */
    context_start_line?: number;
    /**
     * Line number of the match
     */
    line_number?: (number | null);
};
