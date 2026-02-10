/**
 * Documentation result from web search.
 */
export type WebSearchDocumentation = {
    /**
     * Documentation URL
     */
    url: string;
    /**
     * Page title
     */
    title: string;
    /**
     * Page summary
     */
    summary?: string;
    /**
     * Search highlights
     */
    highlights?: Array<string>;
};
