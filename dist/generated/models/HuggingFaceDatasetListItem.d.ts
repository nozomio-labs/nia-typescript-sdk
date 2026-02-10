/**
 * Response model for HuggingFace dataset list items.
 */
export type HuggingFaceDatasetListItem = {
    id: string;
    dataset_id?: (string | null);
    url?: (string | null);
    status: string;
    source_type?: string;
    is_active?: boolean;
    created_at?: (string | null);
    updated_at?: (string | null);
    chunk_count?: (number | null);
    display_name?: (string | null);
    owner?: (string | null);
    description?: (string | null);
    splits?: (Array<string> | null);
    row_count?: (number | null);
    indexed_row_count?: (number | null);
    sampling_strategy?: (string | null);
    error?: (string | null);
};
