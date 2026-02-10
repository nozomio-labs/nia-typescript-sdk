/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A single item in a repository tree.
 */
export type TreeItem = {
    /**
     * File/folder path
     */
    path: string;
    /**
     * Type: 'blob' (file) or 'tree' (directory)
     */
    type: string;
    /**
     * Git file mode
     */
    mode?: (string | null);
    /**
     * Git SHA
     */
    sha?: (string | null);
    /**
     * File size in bytes
     */
    size?: (number | null);
    /**
     * API URL for this item
     */
    url?: (string | null);
};

