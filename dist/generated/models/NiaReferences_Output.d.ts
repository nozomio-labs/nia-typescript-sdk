import type { IndexedResource_Output } from './IndexedResource_Output';
import type { SearchQuery_Output } from './SearchQuery_Output';
/**
 * Structured tracking of NIA resources used during conversation.
 */
export type NiaReferences_Output = {
    indexed_resources?: Array<IndexedResource_Output>;
    search_queries?: Array<SearchQuery_Output>;
    session_summary?: (string | null);
};
