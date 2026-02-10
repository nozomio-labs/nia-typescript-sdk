export type RenameRequestWithIdentifier = {
    /**
     * Data source identifier (UUID, display name, or URL)
     */
    identifier?: (string | null);
    /**
     * Legacy alias for identifier
     */
    source_id?: (string | null);
    /**
     * New display name
     */
    new_name: string;
};
