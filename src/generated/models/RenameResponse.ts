/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response for rename operations.
 */
export type RenameResponse = {
    /**
     * Whether the rename succeeded
     */
    success: boolean;
    /**
     * Status message
     */
    message: string;
    /**
     * The new name after renaming
     */
    new_name?: (string | null);
};

