/**
 * Repository indexing progress.
 */
export type RepositoryProgress = {
    /**
     * Progress percentage (0-100)
     */
    percentage?: number;
    /**
     * Current indexing stage
     */
    stage?: string;
    /**
     * Human-readable progress message
     */
    message?: string;
};
