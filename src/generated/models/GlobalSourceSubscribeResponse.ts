/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response model for global source subscription
 */
export type GlobalSourceSubscribeResponse = {
    /**
     * Action taken: instant_access | wait_for_indexing | not_indexed | use_private | indexing_started
     */
    action: string;
    /**
     * Human-readable description of the action
     */
    message: string;
    /**
     * Canonical ID of the global source
     */
    global_source_id?: (string | null);
    /**
     * TurboPuffer namespace for the source
     */
    namespace?: (string | null);
    /**
     * Current status of the global source
     */
    status?: (string | null);
    /**
     * ID of the created local reference (project/data_source)
     */
    local_reference_id?: (string | null);
    /**
     * Display name of the source
     */
    display_name?: (string | null);
};

