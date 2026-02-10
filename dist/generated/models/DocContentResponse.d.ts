/**
 * Response for documentation content.
 */
export type DocContentResponse = {
    /**
     * Whether content was retrieved
     */
    success: boolean;
    /**
     * Page content (markdown)
     */
    content?: string;
    /**
     * Page metadata
     */
    metadata?: Record<string, any>;
    /**
     * Error message if failed
     */
    error?: (string | null);
};
