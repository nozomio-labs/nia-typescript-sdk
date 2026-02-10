/**
 * Statistics about a repository tree.
 */
export type RepositoryTreeStats = {
    /**
     * Total number of files
     */
    total_files?: number;
    /**
     * Total number of directories
     */
    total_directories?: number;
    /**
     * Total number of items
     */
    total_items?: number;
    /**
     * File extension counts
     */
    file_extensions?: Record<string, number>;
    /**
     * Maximum tree depth
     */
    max_depth?: number;
};
