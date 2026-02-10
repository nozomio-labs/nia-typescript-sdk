/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

