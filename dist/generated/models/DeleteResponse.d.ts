/**
 * Response for delete operations.
 */
export type DeleteResponse = {
    /**
     * Whether the deletion succeeded
     */
    success: boolean;
    /**
     * Status message
     */
    message: string;
};
