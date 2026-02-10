/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response for repository file content.
 */
export type RepositoryContentResponse = {
    /**
     * Whether content was retrieved successfully
     */
    success: boolean;
    /**
     * File content
     */
    content?: string;
    /**
     * File metadata
     */
    metadata?: Record<string, any>;
    /**
     * Error message if failed
     */
    error?: (string | null);
};

