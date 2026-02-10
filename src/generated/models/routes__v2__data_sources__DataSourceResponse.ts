/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type routes__v2__data_sources__DataSourceResponse = {
    id: string;
    url?: (string | null);
    file_name?: (string | null);
    status: string;
    created_at: string;
    updated_at: string;
    page_count?: number;
    chunk_count?: number;
    project_id?: (string | null);
    source_type?: string;
    is_active?: boolean;
    display_name?: (string | null);
    arxiv_id?: (string | null);
    paper_source?: (string | null);
    metadata?: (Record<string, any> | null);
    error?: (string | null);
    error_code?: (string | null);
    has_tree_index?: (boolean | null);
    document_tree?: (Record<string, any> | null);
    indexing_job_id?: (string | null);
    category_id?: (string | null);
};

