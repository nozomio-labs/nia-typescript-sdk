import type { HuggingFaceDatasetListItem } from './HuggingFaceDatasetListItem';
/**
 * Response model for listing HuggingFace datasets.
 */
export type HuggingFaceDatasetListResponse = {
    datasets: Array<HuggingFaceDatasetListItem>;
    total: number;
    limit: number;
    offset: number;
};
