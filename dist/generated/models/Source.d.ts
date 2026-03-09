/**
 * Unified source representation.
 */
export type Source = {
    /**
     * Source identifier
     */
    id: string;
    /**
     * Source type
     */
    type: 'repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive';
    /**
     * Canonical identifier (repo slug, URL, or folder path)
     */
    identifier?: (string | null);
    /**
     * Human-readable name
     */
    display_name?: (string | null);
    /**
     * Indexing status
     */
    status?: (string | null);
    /**
     * Creation timestamp (ISO)
     */
    created_at?: (string | null);
    /**
     * Last update timestamp (ISO)
     */
    updated_at?: (string | null);
    /**
     * Category assignment
     */
    category_id?: (string | null);
    /**
     * Whether the source is global/shared
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
     * Type-specific metadata
     */
    metadata?: Record<string, any>;
};
