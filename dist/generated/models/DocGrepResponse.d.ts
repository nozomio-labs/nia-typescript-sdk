import type { DocGrepFileMatch } from './DocGrepFileMatch';
import type { DocGrepOptions } from './DocGrepOptions';
import type { HuggingFaceGrepMatch } from './HuggingFaceGrepMatch';
/**
 * Response for documentation grep.
 */
export type DocGrepResponse = {
    /**
     * Whether the search succeeded
     */
    success?: boolean;
    /**
     * Search pattern used
     */
    pattern: string;
    /**
     * Path filter applied
     */
    path_filter?: string;
    /**
     * Total number of matches
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
    options?: DocGrepOptions;
    /**
     * Matches (format depends on source type)
     */
    matches?: (Array<HuggingFaceGrepMatch> | Array<DocGrepFileMatch> | null);
    /**
     * Files with matches (files_with_matches mode)
     */
    files?: (Array<string> | null);
    /**
     * Match counts per file (count mode)
     */
    counts?: (Record<string, number> | null);
    /**
     * Source type (huggingface_dataset, documentation, etc.)
     */
    source_type?: (string | null);
};
