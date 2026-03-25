/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response for resolving a source identifier.
 */
export type SourceResolveResponse = {
    /**
     * Resolved source ID
     */
    id: string;
    /**
     * Resolved source type
     */
    type: 'repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector';
    /**
     * Display name
     */
    display_name?: (string | null);
    /**
     * Canonical identifier
     */
    identifier?: (string | null);
};

