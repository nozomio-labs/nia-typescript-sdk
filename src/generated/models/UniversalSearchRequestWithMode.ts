/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UniversalSearchRequestWithMode = {
    /**
     * Natural language search query
     */
    query: string;
    /**
     * Total number of results
     */
    top_k?: number;
    /**
     * Include repository sources
     */
    include_repos?: boolean;
    /**
     * Include documentation sources
     */
    include_docs?: boolean;
    /**
     * Include HuggingFace dataset sources (excluded by default to prevent search pollution)
     */
    include_huggingface_datasets?: boolean;
    /**
     * Weight for vector search (0.7 = 70% vector)
     */
    alpha?: number;
    /**
     * Use AI to compress results
     */
    compress_output?: boolean;
    /**
     * Max source namespaces to deep search
     */
    max_sources?: number;
    /**
     * Number of results to use for AI answer
     */
    sources_for_answer?: number;
    /**
     * Skip cache and force fresh search results
     */
    bypass_cache?: boolean;
    /**
     * Maximum tokens in response. Results truncated when budget reached.
     */
    max_tokens?: (number | null);
    /**
     * Source type boosts (override to customize or set {} to disable)
     */
    boost_source_types?: Record<string, number>;
    /**
     * Programming languages to boost (e.g., ['python', 'typescript'])
     */
    boost_languages?: (Array<string> | null);
    /**
     * Boost multiplier for preferred languages
     */
    language_boost_factor?: number;
    /**
     * Use TurboPuffer FTS v2 native Sum/Product boosting
     */
    use_native_boosting?: boolean;
    /**
     * Minimum similarity for semantic cache hit (0.8-1.0)
     */
    semantic_cache_threshold?: number;
    /**
     * Skip semantic cache (L2) lookup
     */
    bypass_semantic_cache?: boolean;
    /**
     * Extract function/class names from results and search for usages (cAST-inspired)
     */
    expand_symbols?: boolean;
    /**
     * Search mode discriminator
     */
    mode?: string;
};

