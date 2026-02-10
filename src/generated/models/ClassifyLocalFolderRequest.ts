/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request to classify local folder content.
 */
export type ClassifyLocalFolderRequest = {
    /**
     * Categories to classify content into (2-10 categories)
     */
    categories: Array<string>;
    /**
     * Whether to include an 'Uncategorized' bucket for edge cases
     */
    include_uncategorized?: boolean;
};

