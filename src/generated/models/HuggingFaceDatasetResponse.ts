/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response model for HuggingFace dataset indexing.
 */
export type HuggingFaceDatasetResponse = {
    id: string;
    dataset_id: string;
    url: string;
    status: string;
    created_at: string;
    updated_at: string;
    owner?: (string | null);
    description?: (string | null);
    splits?: Array<string>;
    columns?: Array<Record<string, any>>;
    row_count?: number;
    indexed_row_count?: number;
    chunk_count?: number;
    sampling_strategy?: (string | null);
    license?: (string | null);
    error?: (string | null);
};

