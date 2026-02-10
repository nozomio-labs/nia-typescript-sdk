export type SourceContentRequest = {
    /**
     * Type of source: 'repository' or 'documentation'
     */
    source_type: string;
    /**
     * Identifier for the source (repo:path or URL)
     */
    source_identifier: string;
    /**
     * Optional metadata from search results
     */
    metadata?: (Record<string, any> | null);
};
