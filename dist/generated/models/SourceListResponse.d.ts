import type { PaginationInfo } from './PaginationInfo';
import type { Source } from './Source';
/**
 * Response for listing sources.
 */
export type SourceListResponse = {
    /**
     * List of sources
     */
    items?: Array<Source>;
    /**
     * Pagination metadata
     */
    pagination: PaginationInfo;
};
