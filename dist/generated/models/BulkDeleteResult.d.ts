/**
 * Result of a single delete operation
 */
export type BulkDeleteResult = {
    id: string;
    type: string;
    success: boolean;
    error?: (string | null);
};
