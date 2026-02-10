/**
 * Pagination metadata.
 */
export type PaginationInfo = {
    /**
     * Total number of items
     */
    total: number;
    /**
     * Items per page
     */
    limit: number;
    /**
     * Current offset
     */
    offset: number;
    /**
     * Whether more items exist
     */
    has_more: boolean;
};
