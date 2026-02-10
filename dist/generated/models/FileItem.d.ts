/**
 * A single file in the upload batch.
 */
export type FileItem = {
    /**
     * Relative file path (e.g., 'src/main.py')
     */
    path: string;
    /**
     * File content as UTF-8 string
     */
    content: string;
};
