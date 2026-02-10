import type { PaginationInfo } from './PaginationInfo';
/**
 * Backwards-compatible context list response.
 */
export type ContextListCompatResponse = {
    /**
     * List of contexts
     */
    items?: Array<Record<string, any>>;
    /**
     * Pagination metadata
     */
    pagination: PaginationInfo;
    /**
     * Legacy contexts list
     */
    contexts?: Array<Record<string, any>>;
    /**
     * Legacy total count
     */
    total: number;
};
