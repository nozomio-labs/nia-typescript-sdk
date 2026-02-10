/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodebaseContext } from './CodebaseContext';
import type { SearchScope } from './SearchScope';
/**
 * Request model for advisor endpoint.
 */
export type AdvisorRequest = {
    /**
     * User's question
     */
    query: string;
    /**
     * User's codebase context
     */
    codebase: CodebaseContext;
    /**
     * Nia search scope
     */
    search_scope?: (SearchScope | null);
    /**
     * Output format
     */
    output_format?: 'explanation' | 'checklist' | 'diff' | 'structured';
};

