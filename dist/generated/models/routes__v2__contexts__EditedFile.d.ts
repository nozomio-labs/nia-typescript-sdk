/**
 * Represents a file that was modified during the conversation.
 */
export type routes__v2__contexts__EditedFile = {
    /**
     * Path to the file
     */
    file_path: string;
    /**
     * Type: 'created', 'modified', 'deleted'
     */
    operation: string;
    /**
     * Brief description of changes
     */
    changes_description: string;
    key_changes?: Array<string>;
    /**
     * Programming language of the file
     */
    language?: (string | null);
};
