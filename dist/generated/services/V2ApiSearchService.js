import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiSearchService {
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
    static deepResearchV2V2DeepResearchPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deep-research',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static queryRepositoriesV2V2QueryPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Unified search
     * Single search endpoint with a mode discriminator.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static unifiedSearchV2V2SearchPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Deep research (Pro)
     * Multi-step research with AI analysis and citations. Pro subscription required.
     * @param requestBody
     * @returns DeepResearchResponse Successful Response
     * @throws ApiError
     */
    static searchDeepV2V2SearchDeepPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/deep',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Query repositories and docs
     * AI-powered search across indexed repos and documentation. Supports streaming and search_mode (repositories/sources).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static searchQueryV2V2SearchQueryPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Universal search
     * Search across ALL indexed public sources (repos + docs) in one query. Uses RRF ranking.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static searchUniversalV2V2SearchUniversalPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/universal',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Web search
     * Search the web. Supports category filtering, time range, and similar content discovery.
     * @param requestBody
     * @returns WebSearchResponse Successful Response
     * @throws ApiError
     */
    static searchWebV2V2SearchWebPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search/web',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static getSourceContentV2V2SourcesContentPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/content',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static universalSearchV2V2UniversalSearchPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/universal-search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static webSearchV2V2WebSearchPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/web-search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
