/**
 * Response for indexing a repository.
 */
export type RepositoryIndexResponse = {
    /**
     * Status message
     */
    message: string;
    /**
     * Created project ID
     */
    project_id: string;
    /**
     * Repository identifier
     */
    repository: string;
    /**
     * Branch being indexed
     */
    branch: string;
    /**
     * Git ref being indexed (branch, tag, or commit SHA)
     */
    ref?: (string | null);
    /**
     * Current status
     */
    status: string;
    /**
     * Whether using global deduplication
     */
    is_global?: (boolean | null);
    /**
     * Global source ID if applicable
     */
    global_source_id?: (string | null);
};
