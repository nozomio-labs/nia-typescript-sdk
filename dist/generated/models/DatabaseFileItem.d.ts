/**
 * A database file for upload.
 */
export type DatabaseFileItem = {
    /**
     * Original filename (e.g., 'chat.db')
     */
    filename: string;
    /**
     * Base64-encoded database file content
     */
    content: string;
};
