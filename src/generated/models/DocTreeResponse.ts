/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response for documentation tree.
 */
export type DocTreeResponse = {
    /**
     * Whether the request succeeded
     */
    success?: boolean;
    /**
     * Nested tree structure (keys are path segments, values are URLs or nested dicts)
     */
    tree?: Record<string, any>;
    /**
     * Human-readable tree representation
     */
    tree_string?: (string | null);
    /**
     * Tree type: url_tree, document_tree, or huggingface_dataset
     */
    tree_type?: (string | null);
    /**
     * Base URL of the documentation
     */
    base_url?: (string | null);
    /**
     * Total number of pages
     */
    page_count?: number;
    /**
     * Status message
     */
    message?: (string | null);
    /**
     * HuggingFace dataset ID
     */
    dataset_id?: (string | null);
    /**
     * Dataset owner
     */
    owner?: (string | null);
    /**
     * Dataset description
     */
    description?: (string | null);
    /**
     * Available splits (train, test, validation)
     */
    splits?: (Array<string> | null);
    /**
     * Dataset columns with name and type
     */
    columns?: null;
    /**
     * Total rows in dataset
     */
    row_count?: (number | null);
    /**
     * Number of rows indexed
     */
    indexed_row_count?: (number | null);
    /**
     * Sampling strategy used for indexing
     */
    sampling_strategy?: (string | null);
};

