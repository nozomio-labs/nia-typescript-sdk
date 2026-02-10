export type RepositoryRequest = {
    /**
     * Repository identifier in owner/repo format
     */
    repository: string;
    /**
     * Branch to index, defaults to repository's default branch
     */
    branch?: (string | null);
    /**
     * Git ref to index (branch, tag, or commit SHA). Takes precedence over branch.
     */
    ref?: (string | null);
    /**
     * Add to global shared pool (default: True). Set False for private indexing of public repos.
     */
    add_as_global_source?: boolean;
};
