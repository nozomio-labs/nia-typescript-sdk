/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DataSourceRequest = {
    /**
     * URL to index (documentation or website)
     */
    url: string;
    /**
     * URL patterns to include in crawling (supports wildcards)
     */
    url_patterns?: (Array<string> | null);
    /**
     * URL patterns to exclude from crawling (supports wildcards)
     */
    exclude_patterns?: (Array<string> | null);
    /**
     * Optional project ID to associate with
     */
    project_id?: (string | null);
    /**
     * Maximum age of cached content in seconds (default: 0 / always fresh)
     */
    max_age?: (number | null);
    /**
     * Content formats to return (e.g., ['markdown', 'html'])
     */
    formats?: (Array<string> | null);
    /**
     * Extract only main content (False recommended for JS-heavy sites)
     */
    only_main_content?: (boolean | null);
    /**
     * Maximum number of pages to crawl (default: 10000)
     */
    limit?: (number | null);
    /**
     * Maximum crawl depth (default: 20)
     */
    max_depth?: (number | null);
    /**
     * Whether to crawl the entire domain (default: True)
     */
    crawl_entire_domain?: (boolean | null);
    /**
     * Time to wait for page to load in milliseconds (default: 2000ms for JS-heavy sites)
     */
    wait_for?: (number | null);
    /**
     * Include full page screenshot (default: False)
     */
    include_screenshot?: (boolean | null);
    /**
     * Check for llms.txt file for curated documentation URLs (default: True)
     */
    check_llms_txt?: (boolean | null);
    /**
     * How to use llms.txt: 'prefer' (start with llms.txt URLs then crawl more), 'only' (only llms.txt URLs), 'ignore' (skip llms.txt check)
     */
    llms_txt_strategy?: (string | null);
    /**
     * Add to global shared pool (default: True). Set False for private indexing.
     */
    add_as_global_source?: boolean;
    /**
     * Whether this is a direct PDF URL (disables crawling, uses longer timeout)
     */
    is_pdf?: boolean;
    /**
     * Custom display name for the source
     */
    display_name?: (string | null);
    /**
     * Natural language instructions for what content to include (uses LLM filtering)
     */
    focus_instructions?: (string | null);
    /**
     * Extract brand identity and design system (colors, logos, fonts)
     */
    extract_branding?: (boolean | null);
    /**
     * Extract all image URLs from the page
     */
    extract_images?: (boolean | null);
};

