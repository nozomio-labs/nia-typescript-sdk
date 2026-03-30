export type DetectResponse = {
    id: string;
    status: string;
    progress?: number;
    type?: string;
    url?: (string | null);
    source_display_name?: (string | null);
    page_range?: (string | null);
    result?: (Record<string, any> | null);
    page_count?: number;
    error?: (string | null);
    created_at: string;
    updated_at: string;
};
