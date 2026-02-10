/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request model for bug reports
 */
export type BugReportRequest = {
    /**
     * Bug description or feature request
     */
    description: string;
    /**
     * Type: 'bug', 'feature-request', 'improvement', or 'other'
     */
    bug_type?: string;
    /**
     * Additional context or steps to reproduce
     */
    additional_context?: (string | null);
};

