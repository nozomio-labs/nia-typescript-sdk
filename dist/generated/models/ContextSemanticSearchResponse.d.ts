import type { ContextSemanticSearchMetadata } from './ContextSemanticSearchMetadata';
import type { ContextSemanticSearchSuggestions } from './ContextSemanticSearchSuggestions';
/**
 * Response for semantic search in contexts.
 */
export type ContextSemanticSearchResponse = {
    /**
     * Search results with scores
     */
    results?: Array<Record<string, any>>;
    /**
     * The search query used
     */
    search_query: string;
    /**
     * Search metadata
     */
    search_metadata: ContextSemanticSearchMetadata;
    /**
     * Search suggestions
     */
    suggestions: ContextSemanticSearchSuggestions;
};
