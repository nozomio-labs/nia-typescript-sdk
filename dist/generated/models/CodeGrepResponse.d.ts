import type { CodeGrepOptions } from './CodeGrepOptions';
import type { GrepFileResult } from './GrepFileResult';
/**
 * Response for code grep search.
 */
export type CodeGrepResponse = {
    /**
     * Whether the search succeeded
     */
    success?: boolean;
    /**
     * The search pattern used
     */
    pattern: string;
    /**
     * Path filter applied
     */
    path_filter?: string;
    /**
     * Total number of matches found
     */
    total_matches?: number;
    /**
     * Number of files searched
     */
    files_searched?: number;
    /**
     * Number of files with matches
     */
    files_with_matches?: number;
    /**
     * Whether results were truncated
     */
    truncated?: boolean;
    /**
     * Search options used
     */
    options?: CodeGrepOptions;
    /**
     * Matches (content mode)
     */
    matches?: (Record<string, Array<Record<string, any>>> | null);
    /**
     * Files with matches (files_with_matches mode)
     */
    files?: (Array<string> | null);
    /**
     * Match counts per file (count mode)
     */
    counts?: (Record<string, number> | null);
    /**
     * Grep results by file (deprecated)
     */
    results?: (Array<GrepFileResult> | null);
};
