/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvisorRequest } from '../models/AdvisorRequest';
import type { AdvisorResponse } from '../models/AdvisorResponse';
import type { AnalyzeResponse } from '../models/AnalyzeResponse';
import type { Body_upload_and_subscribe_v2_dependencies_upload_post } from '../models/Body_upload_and_subscribe_v2_dependencies_upload_post';
import type { BulkDeleteRequest } from '../models/BulkDeleteRequest';
import type { BulkDeleteResponse } from '../models/BulkDeleteResponse';
import type { CategoryListCompatResponse } from '../models/CategoryListCompatResponse';
import type { CategoryResponse } from '../models/CategoryResponse';
import type { ClassifyLocalFolderRequest } from '../models/ClassifyLocalFolderRequest';
import type { ContextListCompatResponse } from '../models/ContextListCompatResponse';
import type { ContextSearchResponse } from '../models/ContextSearchResponse';
import type { ContextSemanticSearchResponse } from '../models/ContextSemanticSearchResponse';
import type { ContextShareRequest } from '../models/ContextShareRequest';
import type { ContextShareResponse } from '../models/ContextShareResponse';
import type { ContextShareUpdateRequest } from '../models/ContextShareUpdateRequest';
import type { DeepResearchRequestWithMode } from '../models/DeepResearchRequestWithMode';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { DependencyAnalyzeRequest } from '../models/DependencyAnalyzeRequest';
import type { DependencySubscribeRequest } from '../models/DependencySubscribeRequest';
import type { GitHubGlobRequest } from '../models/GitHubGlobRequest';
import type { GitHubReadRequest } from '../models/GitHubReadRequest';
import type { GitHubSearchRequest } from '../models/GitHubSearchRequest';
import type { GlobalSourceSubscribeRequest } from '../models/GlobalSourceSubscribeRequest';
import type { GlobalSourceSubscribeResponse } from '../models/GlobalSourceSubscribeResponse';
import type { PackageSearchGrepRequest } from '../models/PackageSearchGrepRequest';
import type { PackageSearchHybridRequest } from '../models/PackageSearchHybridRequest';
import type { PackageSearchReadFileRequest } from '../models/PackageSearchReadFileRequest';
import type { QuerySearchRequest } from '../models/QuerySearchRequest';
import type { routes__v2__categories__CategoryCreate } from '../models/routes__v2__categories__CategoryCreate';
import type { routes__v2__categories__CategoryUpdate } from '../models/routes__v2__categories__CategoryUpdate';
import type { routes__v2__dependencies__SubscribeResponse } from '../models/routes__v2__dependencies__SubscribeResponse';
import type { Source } from '../models/Source';
import type { SourceCreateRequest } from '../models/SourceCreateRequest';
import type { SourceDeleteResponse } from '../models/SourceDeleteResponse';
import type { SourceListResponse } from '../models/SourceListResponse';
import type { SourceResolveResponse } from '../models/SourceResolveResponse';
import type { SourceUpdateRequest } from '../models/SourceUpdateRequest';
import type { SourceUploadUrlRequest } from '../models/SourceUploadUrlRequest';
import type { SourceUploadUrlResponse } from '../models/SourceUploadUrlResponse';
import type { TracerRequest } from '../models/TracerRequest';
import type { UniversalSearchRequestWithMode } from '../models/UniversalSearchRequestWithMode';
import type { UsageSummaryResponse } from '../models/UsageSummaryResponse';
import type { WebSearchRequestWithMode } from '../models/WebSearchRequestWithMode';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiService {
    /**
     * Context-aware code advisor
     * Analyze codebase context against Nia's indexed documentation to get tailored recommendations.
     * @param requestBody
     * @returns AdvisorResponse Successful Response
     * @throws ApiError
     */
    public static analyzeCodebaseV2AdvisorPost(
        requestBody: AdvisorRequest,
    ): CancelablePromise<AdvisorResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/advisor',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Bulk delete resources
     * Delete multiple resources in a single request. Supports repositories, documentation, research papers, contexts, and local folders.
     * @param requestBody
     * @returns BulkDeleteResponse Successful Response
     * @throws ApiError
     */
    public static bulkDeleteResourcesV2BulkDeletePost(
        requestBody: BulkDeleteRequest,
    ): CancelablePromise<BulkDeleteResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bulk-delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List categories
     * List categories for the authenticated user/organization.
     * @param limit Number of categories to return
     * @param offset Number of categories to skip
     * @returns CategoryListCompatResponse Successful Response
     * @throws ApiError
     */
    public static listCategoriesV2CategoriesGet(
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<CategoryListCompatResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create category
     * Create a new category for organizing data sources.
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    public static createCategoryV2CategoriesPost(
        requestBody: routes__v2__categories__CategoryCreate,
    ): CancelablePromise<CategoryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/categories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update category
     * Update an existing category.
     * @param categoryId
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    public static updateCategoryV2CategoriesCategoryIdPatch(
        categoryId: string,
        requestBody: routes__v2__categories__CategoryUpdate,
    ): CancelablePromise<CategoryResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/categories/{category_id}',
            path: {
                'category_id': categoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete category
     * Delete a category. Data sources with this category will become uncategorized.
     * @param categoryId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteCategoryV2CategoriesCategoryIdDelete(
        categoryId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/categories/{category_id}',
            path: {
                'category_id': categoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Save context
     * Save conversation context for cross-agent sharing. Indexed in vector store for semantic search.
     * @param requestBody
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    public static saveContextV2V2ContextsPost(
        requestBody: ContextShareRequest,
    ): CancelablePromise<ContextShareResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contexts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List contexts
     * List conversation contexts with pagination. Filter by tags, agent source, or memory type.
     * @param limit Number of contexts to return
     * @param offset Number of contexts to skip
     * @param tags Comma-separated tags to filter by
     * @param agentSource Filter by agent source
     * @param memoryType Filter by memory type: scratchpad, episodic, fact, procedural
     * @returns ContextListCompatResponse Successful Response
     * @throws ApiError
     */
    public static listContextsV2V2ContextsGet(
        limit: number = 20,
        offset?: number,
        tags?: (string | null),
        agentSource?: (string | null),
        memoryType?: (string | null),
    ): CancelablePromise<ContextListCompatResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts',
            query: {
                'limit': limit,
                'offset': offset,
                'tags': tags,
                'agent_source': agentSource,
                'memory_type': memoryType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Text search contexts
     * Search contexts by content, title, summary, or tags using MongoDB text search.
     * @param q Search query
     * @param limit Number of contexts to return
     * @param tags Comma-separated tags to filter by
     * @param agentSource Filter by agent source
     * @returns ContextSearchResponse Successful Response
     * @throws ApiError
     */
    public static searchContextsV2V2ContextsSearchGet(
        q: string,
        limit: number = 20,
        tags?: (string | null),
        agentSource?: (string | null),
    ): CancelablePromise<ContextSearchResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts/search',
            query: {
                'q': q,
                'limit': limit,
                'tags': tags,
                'agent_source': agentSource,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Semantic search contexts
     * Vector + BM25 hybrid search over contexts. Returns relevance scores and highlights.
     * @param q Search query
     * @param limit Number of contexts to return
     * @param includeHighlights Include match highlights
     * @param workspaceFilter Filter by specific workspace name
     * @returns ContextSemanticSearchResponse Successful Response
     * @throws ApiError
     */
    public static semanticSearchContextsV2V2ContextsSemanticSearchGet(
        q: string,
        limit: number = 20,
        includeHighlights: boolean = true,
        workspaceFilter?: (string | null),
    ): CancelablePromise<ContextSemanticSearchResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts/semantic-search',
            query: {
                'q': q,
                'limit': limit,
                'include_highlights': includeHighlights,
                'workspace_filter': workspaceFilter,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get context
     * Retrieve a specific context by ID.
     * @param contextId
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    public static getContextV2V2ContextsContextIdGet(
        contextId: string,
    ): CancelablePromise<ContextShareResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts/{context_id}',
            path: {
                'context_id': contextId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update context
     * Update an existing context. Re-indexes in vector store if content changes.
     * @param contextId
     * @param requestBody
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    public static updateContextV2V2ContextsContextIdPut(
        contextId: string,
        requestBody: ContextShareUpdateRequest,
    ): CancelablePromise<ContextShareResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/contexts/{context_id}',
            path: {
                'context_id': contextId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete context
     * Soft delete a context (marks inactive).
     * @param contextId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteContextV2V2ContextsContextIdDelete(
        contextId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/contexts/{context_id}',
            path: {
                'context_id': contextId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Analyze package manifest
     * Parse a package manifest and return dependency information with documentation URL mappings. This is a preview - no subscriptions are created.
     * @param requestBody
     * @returns AnalyzeResponse Successful Response
     * @throws ApiError
     */
    public static analyzeDependenciesV2DependenciesAnalyzePost(
        requestBody: DependencyAnalyzeRequest,
    ): CancelablePromise<AnalyzeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dependencies/analyze',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Subscribe to documentation for manifest dependencies
     * Parse a package manifest and automatically subscribe to documentation for all dependencies.
     * @param requestBody
     * @returns routes__v2__dependencies__SubscribeResponse Successful Response
     * @throws ApiError
     */
    public static subscribeToDependenciesV2DependenciesSubscribePost(
        requestBody: DependencySubscribeRequest,
    ): CancelablePromise<routes__v2__dependencies__SubscribeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dependencies/subscribe',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload manifest file and subscribe to dependencies
     * Upload a package manifest file and subscribe to documentation for all dependencies.
     * @param formData
     * @returns routes__v2__dependencies__SubscribeResponse Successful Response
     * @throws ApiError
     */
    public static uploadAndSubscribeV2DependenciesUploadPost(
        formData: Body_upload_and_subscribe_v2_dependencies_upload_post,
    ): CancelablePromise<routes__v2__dependencies__SubscribeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dependencies/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Glob
     * Find files matching a glob pattern in a GitHub repository.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static githubGlobV2GithubGlobPost(
        requestBody: GitHubGlobRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/glob',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Read
     * Read a file from a GitHub repository with optional line range.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static githubReadV2GithubReadPost(
        requestBody: GitHubReadRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/read',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Code Search
     * Search code in a GitHub repository using GitHub's Code Search API.
     *
     * Rate limited to 10 requests/minute by GitHub. Requires authentication
     * for private repos (via user's GitHub App installation).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static githubCodeSearchV2GithubSearchPost(
        requestBody: GitHubSearchRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Tracer Job
     * Create a Tracer search job.
     *
     * Tracer is an autonomous agent that searches GitHub repositories
     * to answer your question. Returns immediately with a job_id and session_id.
     * Use /github/tracer/{job_id}/stream to receive real-time updates.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createTracerJobV2GithubTracerPost(
        requestBody: TracerRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/tracer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Tracer Jobs
     * List Tracer jobs for the authenticated user.
     * @param status Filter by status
     * @param limit Max results
     * @param skip Offset for pagination
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listTracerJobsV2GithubTracerGet(
        status?: (string | null),
        limit: number = 50,
        skip?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tracer',
            query: {
                'status': status,
                'limit': limit,
                'skip': skip,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Tracer Job
     * Delete a Tracer job by session_id or workflow_run_id.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteTracerJobV2GithubTracerJobIdDelete(
        jobId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/github/tracer/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Tracer Job
     * Get the status and result of a Tracer search job.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getTracerJobV2GithubTracerJobIdGet(
        jobId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tracer/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Stream Tracer Job
     * Stream real-time updates from a Tracer search job.
     *
     * Uses Hatchet's native streaming with MongoDB fallback polling.
     * Reconnectable: can reconnect to a running job's stream at any time.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static streamTracerJobV2GithubTracerJobIdStreamGet(
        jobId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tracer/{job_id}/stream',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Tree
     * Get the file tree of a GitHub repository or subdirectory.
     * @param owner
     * @param repo
     * @param ref Branch, tag, or commit SHA
     * @param path Subdirectory path
     * @returns any Successful Response
     * @throws ApiError
     */
    public static githubTreeV2GithubTreeOwnerRepoGet(
        owner: string,
        repo: string,
        ref: string = 'HEAD',
        path?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tree/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'ref': ref,
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep package source
     * Regex search over public package source code (npm, PyPI, crates.io, Go modules).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static packageSearchGrepV2V2PackagesGrepPost(
        requestBody: PackageSearchGrepRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/grep',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read package file
     * Read specific lines from a package source file. Max 200 lines per request.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static packageSearchReadFileV2V2PackagesReadPost(
        requestBody: PackageSearchReadFileRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/read',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Semantic package search
     * Hybrid semantic + keyword search over package source. 1-5 natural language queries.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static packageSearchHybridV2V2PackagesSearchPost(
        requestBody: PackageSearchHybridRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/search',
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
    public static unifiedSearchV2V2SearchPost(
        requestBody: (QuerySearchRequest | WebSearchRequestWithMode | DeepResearchRequestWithMode | UniversalSearchRequestWithMode),
    ): CancelablePromise<any> {
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
     * List Sources
     * @param type Filter by source type
     * @param query Search by name or identifier
     * @param status Filter by status
     * @param categoryId Filter by category
     * @param limit
     * @param offset
     * @returns SourceListResponse Successful Response
     * @throws ApiError
     */
    public static listSourcesV2SourcesGet(
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
        query?: (string | null),
        status?: (string | null),
        categoryId?: (string | null),
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<SourceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources',
            query: {
                'type': type,
                'query': query,
                'status': status,
                'category_id': categoryId,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Source
     * @param requestBody
     * @returns Source Successful Response
     * @throws ApiError
     */
    public static createSourceV2SourcesPost(
        requestBody: SourceCreateRequest,
    ): CancelablePromise<Source> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Resolve Source
     * @param identifier Display name, URL, or slug
     * @param type Source type hint
     * @returns SourceResolveResponse Successful Response
     * @throws ApiError
     */
    public static resolveSourceV2SourcesResolveGet(
        identifier: string,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<SourceResolveResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/resolve',
            query: {
                'identifier': identifier,
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Subscribe to a global source
     * Subscribe to an existing globally indexed public source. Creates a local reference for instant access without re-indexing.
     * @param requestBody
     * @returns GlobalSourceSubscribeResponse Successful Response
     * @throws ApiError
     */
    public static subscribeSourceV2SourcesSubscribePost(
        requestBody: GlobalSourceSubscribeRequest,
    ): CancelablePromise<GlobalSourceSubscribeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/subscribe',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get PDF upload URL
     * Generate a signed URL for direct PDF upload. Use the returned gcs_path in POST /v2/sources.
     * @param requestBody
     * @returns SourceUploadUrlResponse Successful Response
     * @throws ApiError
     */
    public static createSourceUploadUrlV2SourcesUploadUrlPost(
        requestBody: SourceUploadUrlRequest,
    ): CancelablePromise<SourceUploadUrlResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/upload-url',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source
     * @param sourceId
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    public static getSourceV2SourcesSourceIdGet(
        sourceId: string,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<Source> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    public static updateSourceV2SourcesSourceIdPatch(
        sourceId: string,
        requestBody: SourceUpdateRequest,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<Source> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Source
     * @param sourceId
     * @param type Source type hint
     * @returns SourceDeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteSourceV2SourcesSourceIdDelete(
        sourceId: string,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<SourceDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source Classification
     * @param sourceId
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSourceClassificationV2SourcesSourceIdClassificationGet(
        sourceId: string,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/classification',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Source Classification
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateSourceClassificationV2SourcesSourceIdClassificationPatch(
        sourceId: string,
        requestBody: ClassifyLocalFolderRequest,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/{source_id}/classification',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source Content
     * @param sourceId
     * @param type Source type hint
     * @param path Path or virtual path
     * @param url Direct URL (documentation)
     * @param branch Repository branch
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSourceContentV2SourcesSourceIdContentGet(
        sourceId: string,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
        path?: (string | null),
        url?: (string | null),
        branch?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/content',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
                'path': path,
                'url': url,
                'branch': branch,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    public static grepSourceV2SourcesSourceIdGrepPost(
        sourceId: string,
        requestBody: Record<string, any>,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/{source_id}/grep',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Sync Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    public static syncSourceV2SourcesSourceIdSyncPost(
        sourceId: string,
        requestBody: Record<string, any>,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/{source_id}/sync',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source Tree
     * @param sourceId
     * @param type Source type hint
     * @param branch Repository branch
     * @param maxDepth
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSourceTreeV2SourcesSourceIdTreeGet(
        sourceId: string,
        type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | null),
        branch?: (string | null),
        maxDepth: number = 10,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/tree',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
                'branch': branch,
                'max_depth': maxDepth,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get usage summary
     * Get usage counts and limits for current billing period (queries, indexing, oracle, etc.).
     * @returns UsageSummaryResponse Successful Response
     * @throws ApiError
     */
    public static getUsageSummaryV2V2UsageGet(): CancelablePromise<UsageSummaryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usage',
        });
    }
}
