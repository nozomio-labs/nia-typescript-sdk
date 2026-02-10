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
