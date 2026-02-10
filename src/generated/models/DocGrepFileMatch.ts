/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocGrepMatchDetail } from './DocGrepMatchDetail';
/**
 * Grep matches grouped by file.
 */
export type DocGrepFileMatch = {
    /**
     * Virtual path
     */
    path: string;
    /**
     * Original URL
     */
    url?: (string | null);
    /**
     * Matches in this file
     */
    matches?: Array<DocGrepMatchDetail>;
};

