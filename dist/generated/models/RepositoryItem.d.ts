import type { RepositoryProgress } from './RepositoryProgress';
/**
 * A single repository in the list.
 */
export type RepositoryItem = {
    /**
     * Internal repository ID
     */
    repository_id: string;
    /**
     * Project ID
     */
    id?: (string | null);
    /**
     * Repository identifier (owner/repo)
     */
    repository: string;
    /**
     * Branch name
     */
    branch: string;
    /**
     * Indexing status
     */
    status: string;
    /**
     * Custom display name
     */
    display_name?: (string | null);
    /**
     * Whether this is a global source
     */
    is_global?: (boolean | null);
    /**
     * Global source ID if applicable
     */
    global_source_id?: (string | null);
    /**
     * Global namespace if applicable
     */
    global_namespace?: (string | null);
    /**
     * Indexing progress
     */
    progress?: (RepositoryProgress | null);
    /**
     * Error message if status is error
     */
    error?: (string | null);
    /**
     * Category ID if assigned
     */
    category_id?: (string | null);
};
