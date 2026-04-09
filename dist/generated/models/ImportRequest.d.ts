export type ImportRequest = {
    /**
     * The export manifest JSON
     */
    manifest: Record<string, any>;
    skip_private_repos?: boolean;
    skip_contexts?: boolean;
};
