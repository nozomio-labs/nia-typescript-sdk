/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type QuerySearchRequest = {
    /**
     * List of chat messages
     */
    messages: Array<Record<string, any>>;
    /**
     * List of repositories to query. Can be strings (slug, display name) or dicts with a 'repository' field.
     */
    repositories?: Array<(string | Record<string, any>)>;
    /**
     * List of data sources to query. Can be strings (display_name, URL, or source_id) or dicts with 'source_id' or 'identifier' fields
     */
    data_sources?: Array<(string | Record<string, any>)>;
    /**
     * List of local folders to query. Can be strings (display_name or local_folder_id) or dicts with 'local_folder_id' or 'identifier' fields. Local folders are private and user-scoped.
     */
    local_folders?: Array<(string | Record<string, any>)>;
    /**
     * Filter local folder results by classification category (e.g., 'Work', 'Personal')
     */
    category?: (string | null);
    /**
     * Search mode: 'repositories', 'sources', or 'unified'
     */
    search_mode?: string;
    /**
     * Whether to stream the response
     */
    stream?: boolean;
    /**
     * Whether to include source texts in the response
     */
    include_sources?: boolean;
    /**
     * Skip LLM processing for faster results (100-500ms vs 2-8s). Set to false for deeper analysis.
     */
    fast_mode?: boolean;
    /**
     * Return raw search results without any LLM processing. Returns only sources with scores.
     */
    skip_llm?: boolean;
    /**
     * Retrieval strategy: 'vector' (default similarity search), 'tree' (LLM-guided tree navigation for PDFs), or 'hybrid' (both combined)
     */
    reasoning_strategy?: string;
    /**
     * Maximum tokens in response. Results truncated when budget reached.
     */
    max_tokens?: (number | null);
    /**
     * Minimum similarity for semantic cache hit (non-streaming only)
     */
    semantic_cache_threshold?: number;
    /**
     * Skip semantic cache (L2) lookup
     */
    bypass_semantic_cache?: boolean;
    /**
     * Generate follow-up questions (adds ~500-1000ms LLM latency). Disabled by default for speed.
     */
    include_follow_ups?: boolean;
    /**
     * Search mode discriminator
     */
    mode?: string;
};

