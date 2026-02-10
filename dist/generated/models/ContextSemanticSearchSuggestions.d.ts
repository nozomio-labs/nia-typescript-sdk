/**
 * Suggestions from semantic search.
 */
export type ContextSemanticSearchSuggestions = {
    /**
     * Related tags
     */
    related_tags?: Array<string>;
    /**
     * Related workspaces
     */
    workspaces?: Array<string>;
    /**
     * Search tips
     */
    tips?: Array<string>;
};
