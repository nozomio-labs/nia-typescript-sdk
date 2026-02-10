/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request model for indexing a HuggingFace dataset.
 */
export type HuggingFaceDatasetRequest = {
    /**
     * HuggingFace dataset URL (e.g., 'https://huggingface.co/datasets/squad' or 'dair-ai/emotion')
     */
    url: string;
    /**
     * Dataset configuration name (for multi-config datasets)
     */
    config?: (string | null);
    /**
     * Add to global shared pool (default: True). Set False for private indexing.
     */
    add_as_global_source?: boolean;
};

