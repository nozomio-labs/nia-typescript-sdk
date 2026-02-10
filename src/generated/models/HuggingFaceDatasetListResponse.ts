/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

