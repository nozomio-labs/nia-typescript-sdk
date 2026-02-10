/**
 * Response for source content retrieval.
 */
export type SourceContentResponse = {
    /**
     * Whether retrieval succeeded
     */
    success: boolean;
    /**
     * Source content
     */
    content?: string;
    /**
     * Content metadata
     */
    metadata?: Record<string, any>;
    /**
     * Error message if failed
     */
    error?: (string | null);
};
