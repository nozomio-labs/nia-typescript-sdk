import type { DeepResearchRequest } from '../models/DeepResearchRequest';
import type { DeepResearchRequestWithMode } from '../models/DeepResearchRequestWithMode';
import type { DeepResearchResponse } from '../models/DeepResearchResponse';
import type { QueryRequest } from '../models/QueryRequest';
import type { QuerySearchRequest } from '../models/QuerySearchRequest';
import type { routes__v2__search__UniversalSearchRequest } from '../models/routes__v2__search__UniversalSearchRequest';
import type { SourceContentRequest } from '../models/SourceContentRequest';
import type { SourceContentResponse } from '../models/SourceContentResponse';
import type { UniversalSearchRequestWithMode } from '../models/UniversalSearchRequestWithMode';
import type { WebSearchRequest } from '../models/WebSearchRequest';
import type { WebSearchRequestWithMode } from '../models/WebSearchRequestWithMode';
import type { WebSearchResponse } from '../models/WebSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiSearchService {
    /**
     * @deprecated
     * Deep Research V2
     * Deep research via AI agent.
     *
     * DEPRECATED: Use /v2/search/deep instead. This endpoint will be removed in a future version.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static deepResearchV2V2DeepResearchPost(requestBody: DeepResearchRequest): CancelablePromise<any>;
    /**
     * @deprecated
     * Query Repositories V2
     * Query indexed repositories and/or documentation sources.
     *
     * DEPRECATED: Use /v2/search/query instead. This endpoint will be removed in a future version.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static queryRepositoriesV2V2QueryPost(requestBody: QueryRequest): CancelablePromise<any>;
    /**
     * Unified search
     * Single search endpoint with a mode discriminator.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static unifiedSearchV2V2SearchPost(requestBody: (QuerySearchRequest | WebSearchRequestWithMode | DeepResearchRequestWithMode | UniversalSearchRequestWithMode)): CancelablePromise<any>;
    /**
     * @deprecated
     * Deep research (Pro)
     * Multi-step research with AI analysis and citations. Pro subscription required.
     * @param requestBody
     * @returns DeepResearchResponse Successful Response
     * @throws ApiError
     */
    static searchDeepV2V2SearchDeepPost(requestBody: DeepResearchRequest): CancelablePromise<DeepResearchResponse>;
    /**
     * @deprecated
     * Query repositories and docs
     * AI-powered search across indexed repos and documentation. Supports streaming and search_mode (repositories/sources).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static searchQueryV2V2SearchQueryPost(requestBody: QueryRequest): CancelablePromise<any>;
    /**
     * @deprecated
     * Universal search
     * Search across ALL indexed public sources (repos + docs) in one query. Uses RRF ranking.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static searchUniversalV2V2SearchUniversalPost(requestBody: routes__v2__search__UniversalSearchRequest): CancelablePromise<any>;
    /**
     * @deprecated
     * Web search
     * Search the web. Supports category filtering, time range, and similar content discovery.
     * @param requestBody
     * @returns WebSearchResponse Successful Response
     * @throws ApiError
     */
    static searchWebV2V2SearchWebPost(requestBody: WebSearchRequest): CancelablePromise<WebSearchResponse>;
    /**
     * @deprecated
     * Get Source Content V2
     * Get full content of a specific source file or document.
     *
     * DEPRECATED: Use GET /v2/repositories/{repository_id}/content or
     * GET /v2/data-sources/{source_id}/content instead.
     * @param requestBody
     * @returns SourceContentResponse Successful Response
     * @throws ApiError
     */
    static getSourceContentV2V2SourcesContentPost(requestBody: SourceContentRequest): CancelablePromise<SourceContentResponse>;
    /**
     * @deprecated
     * Universal Search V2
     * Universal search across all indexed public sources.
     *
     * DEPRECATED: Use /v2/search/universal instead. This endpoint will be removed in a future version.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static universalSearchV2V2UniversalSearchPost(requestBody: routes__v2__search__UniversalSearchRequest): CancelablePromise<any>;
    /**
     * @deprecated
     * Web Search V2
     * AI-powered web search via the v2 API.
     *
     * DEPRECATED: Use /v2/search/web instead. This endpoint will be removed in a future version.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static webSearchV2V2WebSearchPost(requestBody: WebSearchRequest): CancelablePromise<any>;
}
