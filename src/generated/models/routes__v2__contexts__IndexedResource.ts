/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a NIA resource (repository or documentation) with context.
 */
export type routes__v2__contexts__IndexedResource = {
    /**
     * Repository (owner/repo) or documentation URL/ID
     */
    identifier: string;
    /**
     * Type: 'repository' or 'documentation'
     */
    resource_type: string;
    /**
     * Why this resource was used/referenced
     */
    purpose: string;
    /**
     * When it was indexed
     */
    indexed_at?: (string | null);
};

