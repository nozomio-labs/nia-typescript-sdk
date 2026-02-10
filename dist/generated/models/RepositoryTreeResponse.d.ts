import type { RepositoryTreeStats } from './RepositoryTreeStats';
import type { TreeItem } from './TreeItem';
/**
 * Response for repository tree endpoints.
 */
export type RepositoryTreeResponse = {
    /**
     * Repository identifier
     */
    repository_id?: (string | null);
    /**
     * Repository owner
     */
    owner?: (string | null);
    /**
     * Repository name
     */
    repo?: (string | null);
    /**
     * Branch name
     */
    branch?: (string | null);
    /**
     * Tree SHA
     */
    sha?: (string | null);
    /**
     * Human-readable tree structure
     */
    tree_text?: (string | null);
    /**
     * Tree statistics
     */
    stats?: (RepositoryTreeStats | null);
    /**
     * File tree items
     */
    files?: Array<TreeItem>;
    /**
     * Directory tree items
     */
    directories?: Array<TreeItem>;
    /**
     * Whether the tree was truncated
     */
    truncated?: boolean;
    /**
     * Source of the tree data
     */
    source?: (string | null);
    /**
     * Timestamp when tree was retrieved
     */
    retrieved_at?: (string | null);
    /**
     * Tree items (deprecated)
     */
    tree?: (Array<TreeItem> | null);
    /**
     * Formatted tree (deprecated, use tree_text)
     */
    formatted_tree?: (string | null);
    /**
     * Total items (deprecated, use stats.total_items)
     */
    total_items?: (number | null);
    /**
     * Max depth (deprecated, use stats.max_depth)
     */
    max_depth?: (number | null);
};
