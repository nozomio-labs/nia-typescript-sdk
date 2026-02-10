/**
 * Response model for research paper indexing.
 */
export type routes__v2__data_sources__ResearchPaperResponse = {
    id: string;
    arxiv_id: string;
    title: string;
    authors: Array<string>;
    abstract: string;
    categories: Array<string>;
    primary_category: string;
    status: string;
    created_at: string;
    updated_at: string;
    chunk_count?: number;
    doi?: (string | null);
    published_date?: (string | null);
    pdf_url: string;
    abs_url: string;
    error?: (string | null);
};
