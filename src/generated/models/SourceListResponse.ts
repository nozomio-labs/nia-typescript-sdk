/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

