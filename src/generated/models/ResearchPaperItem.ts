/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResearchPaperMetadataItem } from './ResearchPaperMetadataItem';
/**
 * A single research paper.
 */
export type ResearchPaperItem = {
    /**
     * Paper ID
     */
    id: string;
    /**
     * Paper title
     */
    title?: (string | null);
    /**
     * arXiv ID
     */
    arxiv_id?: (string | null);
    /**
     * Paper URL
     */
    url?: (string | null);
    /**
     * Indexing status
     */
    status: string;
    /**
     * Source type
     */
    source_type?: string;
    /**
     * Whether paper is active
     */
    is_active?: boolean;
    /**
     * When indexed
     */
    created_at?: (string | null);
    /**
     * Last updated
     */
    updated_at?: (string | null);
    /**
     * Number of pages
     */
    page_count?: (number | null);
    /**
     * Number of chunks
     */
    chunk_count?: (number | null);
    /**
     * Display name
     */
    display_name?: (string | null);
    /**
     * Paper metadata
     */
    metadata?: (ResearchPaperMetadataItem | null);
    /**
     * Paper authors
     */
    authors?: (Array<string> | null);
    /**
     * Error message if failed
     */
    error?: (string | null);
};

