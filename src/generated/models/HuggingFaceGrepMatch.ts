/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A single grep match from a HuggingFace dataset (flat format).
 */
export type HuggingFaceGrepMatch = {
    /**
     * Path in format split/row_N
     */
    path: string;
    /**
     * Dataset split name
     */
    split: string;
    /**
     * Row index in the dataset
     */
    row_index: number;
    /**
     * The matching line content
     */
    line?: string;
    /**
     * Context lines around the match
     */
    context?: Array<string>;
    /**
     * Starting line number of context
     */
    context_start_line?: number;
    /**
     * Line number within the row
     */
    line_number?: (number | null);
};

