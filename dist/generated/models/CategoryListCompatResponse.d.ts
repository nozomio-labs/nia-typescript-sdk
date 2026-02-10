import type { PaginationInfo } from './PaginationInfo';
/**
 * Backwards-compatible category list response.
 */
export type CategoryListCompatResponse = {
    /**
     * List of categories
     */
    items?: Array<Record<string, any>>;
    /**
     * Pagination metadata
     */
    pagination: PaginationInfo;
    /**
     * Legacy categories list
     */
    categories?: Array<Record<string, any>>;
    /**
     * Legacy total count
     */
    total: number;
};
