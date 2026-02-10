/**
 * Provenance tracking for content artifacts.
 */
export type LineageMetadata = {
    /**
     * When this artifact was created
     */
    created_at: string;
    /**
     * Source identifiers (e.g., 'repo:owner/repo', 'doc:name')
     */
    source_ids?: Array<string>;
    /**
     * Confidence score 0-1
     */
    confidence?: (number | null);
    /**
     * Parent context IDs if derived
     */
    derived_from?: (Array<string> | null);
    /**
     * Tools used to create this artifact
     */
    tool_calls?: (Array<string> | null);
    /**
     * Model version that created this
     */
    model_version?: (string | null);
};
