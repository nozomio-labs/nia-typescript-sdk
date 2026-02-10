/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GrepMatch } from './GrepMatch';
/**
 * Grep results grouped by file.
 */
export type GrepFileResult = {
    /**
     * Path to the file
     */
    file_path: string;
    /**
     * Matches in this file
     */
    matches?: Array<GrepMatch>;
    /**
     * Number of matches in this file
     */
    match_count?: number;
};

