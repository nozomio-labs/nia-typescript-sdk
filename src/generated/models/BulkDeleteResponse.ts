/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkDeleteResult } from './BulkDeleteResult';
/**
 * Response for bulk deletion
 */
export type BulkDeleteResponse = {
    /**
     * Number of successfully deleted items
     */
    deleted: number;
    /**
     * Number of failed deletions
     */
    failed: number;
    /**
     * Per-item results
     */
    results: Array<BulkDeleteResult>;
};

