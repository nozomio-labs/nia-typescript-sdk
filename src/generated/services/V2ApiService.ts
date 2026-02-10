/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvisorRequest } from '../models/AdvisorRequest';
import type { AdvisorResponse } from '../models/AdvisorResponse';
import type { AnalyzeResponse } from '../models/AnalyzeResponse';
import type { Body_upload_and_subscribe_v2_dependencies_upload_post } from '../models/Body_upload_and_subscribe_v2_dependencies_upload_post';
import type { BugReportRequest } from '../models/BugReportRequest';
import type { BugReportResponse } from '../models/BugReportResponse';
import type { BulkDeleteRequest } from '../models/BulkDeleteRequest';
import type { BulkDeleteResponse } from '../models/BulkDeleteResponse';
import type { CategoryAssignRequest } from '../models/CategoryAssignRequest';
import type { CategoryListCompatResponse } from '../models/CategoryListCompatResponse';
import type { CategoryResponse } from '../models/CategoryResponse';
import type { ClassifyLocalFolderRequest } from '../models/ClassifyLocalFolderRequest';
import type { CodeGrepRequest } from '../models/CodeGrepRequest';
import type { CodeGrepResponse } from '../models/CodeGrepResponse';
import type { ContextListCompatResponse } from '../models/ContextListCompatResponse';
import type { ContextSearchResponse } from '../models/ContextSearchResponse';
import type { ContextSemanticSearchResponse } from '../models/ContextSemanticSearchResponse';
import type { ContextShareRequest } from '../models/ContextShareRequest';
import type { ContextShareResponse } from '../models/ContextShareResponse';
import type { ContextShareUpdateRequest } from '../models/ContextShareUpdateRequest';
import type { DataSourceRequest } from '../models/DataSourceRequest';
import type { DeepResearchRequest } from '../models/DeepResearchRequest';
import type { DeepResearchRequestWithMode } from '../models/DeepResearchRequestWithMode';
import type { DeepResearchResponse } from '../models/DeepResearchResponse';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { DependencyAnalyzeRequest } from '../models/DependencyAnalyzeRequest';
import type { DependencySubscribeRequest } from '../models/DependencySubscribeRequest';
import type { DocContentResponse } from '../models/DocContentResponse';
import type { DocGrepResponse } from '../models/DocGrepResponse';
import type { DocLsResponse } from '../models/DocLsResponse';
import type { DocTreeResponse } from '../models/DocTreeResponse';
import type { GitHubGlobRequest } from '../models/GitHubGlobRequest';
import type { GitHubReadRequest } from '../models/GitHubReadRequest';
import type { GitHubSearchRequest } from '../models/GitHubSearchRequest';
import type { GlobalSourceSubscribeRequest } from '../models/GlobalSourceSubscribeRequest';
import type { GlobalSourceSubscribeResponse } from '../models/GlobalSourceSubscribeResponse';
import type { GrepRequest } from '../models/GrepRequest';
import type { HuggingFaceDatasetListResponse } from '../models/HuggingFaceDatasetListResponse';
import type { HuggingFaceDatasetRequest } from '../models/HuggingFaceDatasetRequest';
import type { HuggingFaceDatasetResponse } from '../models/HuggingFaceDatasetResponse';
import type { ImageSignedUrlRequest } from '../models/ImageSignedUrlRequest';
import type { ImageSignedUrlResponse } from '../models/ImageSignedUrlResponse';
import type { PackageSearchGrepRequest } from '../models/PackageSearchGrepRequest';
import type { PackageSearchHybridRequest } from '../models/PackageSearchHybridRequest';
import type { PackageSearchReadFileRequest } from '../models/PackageSearchReadFileRequest';
import type { QueryRequest } from '../models/QueryRequest';
import type { QuerySearchRequest } from '../models/QuerySearchRequest';
import type { RenameRequestWithIdentifier } from '../models/RenameRequestWithIdentifier';
import type { RenameResponse } from '../models/RenameResponse';
import type { RepositoryContentResponse } from '../models/RepositoryContentResponse';
import type { RepositoryIndexResponse } from '../models/RepositoryIndexResponse';
import type { RepositoryItem } from '../models/RepositoryItem';
import type { RepositoryRequest } from '../models/RepositoryRequest';
import type { RepositoryStatus } from '../models/RepositoryStatus';
import type { RepositoryTreeResponse } from '../models/RepositoryTreeResponse';
import type { ResearchPaperListResponse } from '../models/ResearchPaperListResponse';
import type { routes__v2__categories__CategoryCreate } from '../models/routes__v2__categories__CategoryCreate';
import type { routes__v2__categories__CategoryUpdate } from '../models/routes__v2__categories__CategoryUpdate';
import type { routes__v2__data_sources__DataSourceResponse } from '../models/routes__v2__data_sources__DataSourceResponse';
import type { routes__v2__data_sources__RenameRequest } from '../models/routes__v2__data_sources__RenameRequest';
import type { routes__v2__data_sources__ResearchPaperRequest } from '../models/routes__v2__data_sources__ResearchPaperRequest';
import type { routes__v2__data_sources__ResearchPaperResponse } from '../models/routes__v2__data_sources__ResearchPaperResponse';
import type { routes__v2__dependencies__SubscribeResponse } from '../models/routes__v2__dependencies__SubscribeResponse';
import type { routes__v2__repositories__RenameRequest } from '../models/routes__v2__repositories__RenameRequest';
import type { routes__v2__search__UniversalSearchRequest } from '../models/routes__v2__search__UniversalSearchRequest';
import type { Source } from '../models/Source';
import type { SourceContentRequest } from '../models/SourceContentRequest';
import type { SourceContentResponse } from '../models/SourceContentResponse';
import type { SourceCreateRequest } from '../models/SourceCreateRequest';
import type { SourceDeleteResponse } from '../models/SourceDeleteResponse';
import type { SourceListResponse } from '../models/SourceListResponse';
import type { SourceResolveResponse } from '../models/SourceResolveResponse';
import type { SourceUpdateRequest } from '../models/SourceUpdateRequest';
import type { TracerRequest } from '../models/TracerRequest';
import type { UniversalSearchRequestWithMode } from '../models/UniversalSearchRequestWithMode';
import type { UsageSummaryResponse } from '../models/UsageSummaryResponse';
import type { WebSearchRequest } from '../models/WebSearchRequest';
import type { WebSearchRequestWithMode } from '../models/WebSearchRequestWithMode';
import type { WebSearchResponse } from '../models/WebSearchResponse';
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
     * @deprecated
     * Submit Bug Report V2
     * Submit a bug report or feature request via the v2 API.
     * @param requestBody
     * @returns BugReportResponse Successful Response
     * @throws ApiError
     */
    public static submitBugReportV2V2BugReportPost(
        requestBody: BugReportRequest,
    ): CancelablePromise<BugReportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bug-report',
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
     * Index a data source
     * Index a documentation site or web content. Supports URL patterns, llms.txt, and crawl depth limits.
     * @param requestBody
     * @returns routes__v2__data_sources__DataSourceResponse Successful Response
     * @throws ApiError
     */
    public static createDataSourceV2V2DataSourcesPost(
        requestBody: DataSourceRequest,
    ): CancelablePromise<routes__v2__data_sources__DataSourceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/data-sources',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List data sources
     * List all indexed documentation and web sources.
     * @param q Optional substring filter (matches display_name/url/file_name)
     * @param status Optional status filter (e.g. completed|indexing|failed)
     * @param sourceType Optional source type filter (e.g. web|documentation|research_paper|huggingface_dataset)
     * @param categoryId Optional category filter. Use 'uncategorized' for sources without category
     * @param limit Max data sources to return (db-level pagination)
     * @param offset Number of data sources to skip (db-level pagination)
     * @param includeTree Include document_tree in each result
     * @returns routes__v2__data_sources__DataSourceResponse Successful Response
     * @throws ApiError
     */
    public static listDataSourcesV2V2DataSourcesGet(
        q?: (string | null),
        status?: (string | null),
        sourceType?: (string | null),
        categoryId?: (string | null),
        limit: number = 100,
        offset?: number,
        includeTree: boolean = true,
    ): CancelablePromise<Array<routes__v2__data_sources__DataSourceResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data-sources',
            query: {
                'q': q,
                'status': status,
                'source_type': sourceType,
                'category_id': categoryId,
                'limit': limit,
                'offset': offset,
                'include_tree': includeTree,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Rename data source
     * Update display name using flexible identifier (ID, name, or URL).
     * @param requestBody
     * @returns RenameResponse Successful Response
     * @throws ApiError
     */
    public static renameDataSourceV2V2DataSourcesRenamePatch(
        requestBody: RenameRequestWithIdentifier,
    ): CancelablePromise<RenameResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/data-sources/rename',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get data source
     * Get details of a data source by ID, display name, or URL.
     * @param sourceId
     * @returns routes__v2__data_sources__DataSourceResponse Successful Response
     * @throws ApiError
     */
    public static getDataSourceV2V2DataSourcesSourceIdGet(
        sourceId: string,
    ): CancelablePromise<routes__v2__data_sources__DataSourceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data-sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete data source
     * Remove an indexed data source.
     * @param sourceId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteDataSourceV2V2DataSourcesSourceIdDelete(
        sourceId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/data-sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Assign category to data source
     * Assign a category to a data source, or remove category by passing null.
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static assignDataSourceCategoryV2DataSourcesSourceIdCategoryPatch(
        sourceId: string,
        requestBody: CategoryAssignRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/data-sources/{source_id}/category',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get page content
     * Retrieve full content of a documentation page.
     * @param sourceId
     * @param path Virtual path to the page
     * @param url Direct URL of the page
     * @returns DocContentResponse Successful Response
     * @throws ApiError
     */
    public static getDataSourceContentV2V2DataSourcesSourceIdContentGet(
        sourceId: string,
        path?: (string | null),
        url?: (string | null),
    ): CancelablePromise<DocContentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data-sources/{source_id}/content',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep documentation
     * Regex search over indexed documentation. Exhaustive by default. Supports context lines and output modes.
     * @param sourceId
     * @param requestBody
     * @returns DocGrepResponse Successful Response
     * @throws ApiError
     */
    public static grepDocumentationV2V2DataSourcesSourceIdGrepPost(
        sourceId: string,
        requestBody: GrepRequest,
    ): CancelablePromise<DocGrepResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/data-sources/{source_id}/grep',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List directory
     * List files and subdirectories at a virtual path (like unix ls).
     * @param sourceId
     * @param path
     * @returns DocLsResponse Successful Response
     * @throws ApiError
     */
    public static listDocumentationDirectoryV2V2DataSourcesSourceIdLsGet(
        sourceId: string,
        path: string = '/',
    ): CancelablePromise<DocLsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data-sources/{source_id}/ls',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read documentation page
     * Read page content by virtual path, page number, or tree node. Supports line range and max_length truncation.
     * @param sourceId
     * @param path Virtual path (for web docs)
     * @param page Page number (for PDFs with tree index)
     * @param treeNodeId Tree node ID (for PDFs with tree index)
     * @param lineStart Start line (1-based, inclusive)
     * @param lineEnd End line (1-based, inclusive)
     * @param maxLength Max characters to return
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readDocumentationFileV2V2DataSourcesSourceIdReadGet(
        sourceId: string,
        path?: (string | null),
        page?: (number | null),
        treeNodeId?: (string | null),
        lineStart?: (number | null),
        lineEnd?: (number | null),
        maxLength?: (number | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data-sources/{source_id}/read',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
                'page': page,
                'tree_node_id': treeNodeId,
                'line_start': lineStart,
                'line_end': lineEnd,
                'max_length': maxLength,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Rename Data Source Legacy
     * Legacy rename endpoint - only works with UUID identifiers.
     *
     * DEPRECATED: Use PATCH /v2/data-sources/rename with body { identifier, new_name } instead.
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static renameDataSourceLegacyV2DataSourcesSourceIdRenamePatch(
        sourceId: string,
        requestBody: routes__v2__data_sources__RenameRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/data-sources/{source_id}/rename',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get documentation tree
     * Get virtual filesystem tree of indexed documentation pages.
     * @param sourceId
     * @returns DocTreeResponse Successful Response
     * @throws ApiError
     */
    public static getDocumentationTreeV2V2DataSourcesSourceIdTreeGet(
        sourceId: string,
    ): CancelablePromise<DocTreeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data-sources/{source_id}/tree',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    public static deepResearchV2V2DeepResearchPost(
        requestBody: DeepResearchRequest,
    ): CancelablePromise<any> {
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
     * Subscribe to a global source
     * Subscribe to an existing globally indexed public source. Creates a local reference for instant access.
     * @param requestBody
     * @returns GlobalSourceSubscribeResponse Successful Response
     * @throws ApiError
     */
    public static subscribeToGlobalSourceV2GlobalSourcesSubscribePost(
        requestBody: GlobalSourceSubscribeRequest,
    ): CancelablePromise<GlobalSourceSubscribeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/global-sources/subscribe',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Index HuggingFace dataset
     * Index a HuggingFace dataset by URL or identifier. Extracts metadata (splits, columns, row counts) automatically.
     * @param requestBody
     * @returns HuggingFaceDatasetResponse Successful Response
     * @throws ApiError
     */
    public static indexHuggingfaceDatasetV2V2HuggingfaceDatasetsPost(
        requestBody: HuggingFaceDatasetRequest,
    ): CancelablePromise<HuggingFaceDatasetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/huggingface-datasets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List HuggingFace datasets
     * List all indexed HuggingFace datasets with metadata.
     * @param status Filter by status: processing, completed, failed
     * @param limit Maximum number of results
     * @param offset Pagination offset
     * @param organizationId Organization ID for org-level filtering
     * @returns HuggingFaceDatasetListResponse Successful Response
     * @throws ApiError
     */
    public static listHuggingfaceDatasetsV2V2HuggingfaceDatasetsGet(
        status?: (string | null),
        limit: number = 50,
        offset?: number,
        organizationId?: (string | null),
    ): CancelablePromise<HuggingFaceDatasetListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/huggingface-datasets',
            query: {
                'status': status,
                'limit': limit,
                'offset': offset,
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get signed URL for image download
     * Generate a signed URL for downloading an embedded image from indexed PDFs.
     * @param requestBody
     * @returns ImageSignedUrlResponse Successful Response
     * @throws ApiError
     */
    public static getImageSignedUrlV2V2ImagesSignedUrlPost(
        requestBody: ImageSignedUrlRequest,
    ): CancelablePromise<ImageSignedUrlResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/images/signed-url',
            body: requestBody,
            mediaType: 'application/json',
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
    public static packageSearchGrepV2V2PackageSearchGrepPost(
        requestBody: PackageSearchGrepRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/package-search/grep',
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
    public static packageSearchHybridV2V2PackageSearchHybridPost(
        requestBody: PackageSearchHybridRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/package-search/hybrid',
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
    public static packageSearchReadFileV2V2PackageSearchReadFilePost(
        requestBody: PackageSearchReadFileRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/package-search/read-file',
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
    public static queryRepositoriesV2V2QueryPost(
        requestBody: QueryRequest,
    ): CancelablePromise<any> {
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
     * List all repositories
     * List all indexed repositories for the authenticated user.
     * @param q Optional substring filter
     * @param status Optional status filter
     * @param limit Max repositories to return
     * @param offset Number of repositories to skip
     * @returns RepositoryItem Successful Response
     * @throws ApiError
     */
    public static listRepositoriesV2V2RepositoriesGet(
        q?: (string | null),
        status?: (string | null),
        limit?: (number | null),
        offset?: number,
    ): CancelablePromise<Array<RepositoryItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories',
            query: {
                'q': q,
                'status': status,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Index a repository
     * Start indexing a GitHub repository. Supports folder paths like owner/repo/tree/branch/folder. Use X-GitHub-Token header for private repos.
     * @param requestBody
     * @returns RepositoryIndexResponse Successful Response
     * @throws ApiError
     */
    public static indexRepositoryV2V2RepositoriesPost(
        requestBody: RepositoryRequest,
    ): CancelablePromise<RepositoryIndexResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repositories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get repository status
     * Check the current indexing status of a repository.
     * @param repositoryId
     * @returns RepositoryStatus Successful Response
     * @throws ApiError
     */
    public static getRepositoryStatusV2V2RepositoriesRepositoryIdGet(
        repositoryId: string,
    ): CancelablePromise<RepositoryStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}',
            path: {
                'repository_id': repositoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete repository
     * Remove an indexed repository from your account.
     * @param repositoryId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteRepositoryV2V2RepositoriesRepositoryIdDelete(
        repositoryId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repositories/{repository_id}',
            path: {
                'repository_id': repositoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get file content
     * Retrieve full content of a file from an indexed repository.
     * @param repositoryId
     * @param path Path to the file
     * @param branch Branch to read from
     * @param ref Git ref to read from (branch, tag, or commit)
     * @returns RepositoryContentResponse Successful Response
     * @throws ApiError
     */
    public static getRepositoryContentV2V2RepositoriesRepositoryIdContentGet(
        repositoryId: string,
        path: string,
        branch?: (string | null),
        ref?: (string | null),
    ): CancelablePromise<RepositoryContentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/content',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'path': path,
                'branch': branch,
                'ref': ref,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Get Github Tree V2
     * Get the file tree directly from GitHub Trees API. DEPRECATED: Use /tree instead.
     * @param repositoryId
     * @param branch Branch to get tree from
     * @param includePaths Comma-separated paths to include
     * @param excludePaths Comma-separated paths to exclude
     * @param fileExtensions Comma-separated extensions to include
     * @param excludeExtensions Comma-separated extensions to exclude
     * @param showFullPaths Show full file paths
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getGithubTreeV2V2RepositoriesRepositoryIdGithubTreeGet(
        repositoryId: string,
        branch?: (string | null),
        includePaths?: (string | null),
        excludePaths?: (string | null),
        fileExtensions?: (string | null),
        excludeExtensions?: (string | null),
        showFullPaths: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/github-tree',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'branch': branch,
                'include_paths': includePaths,
                'exclude_paths': excludePaths,
                'file_extensions': fileExtensions,
                'exclude_extensions': excludeExtensions,
                'show_full_paths': showFullPaths,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep repository code
     * Regex search over indexed code. Exhaustive by default (searches all chunks). Supports context lines, case sensitivity, output modes.
     * @param repositoryId
     * @param requestBody
     * @returns CodeGrepResponse Successful Response
     * @throws ApiError
     */
    public static grepRepositoryV2V2RepositoriesRepositoryIdGrepPost(
        repositoryId: string,
        requestBody: CodeGrepRequest,
    ): CancelablePromise<CodeGrepResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repositories/{repository_id}/grep',
            path: {
                'repository_id': repositoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Get Repository Hierarchy V2
     * Get the file hierarchy for a repository.
     * @param repositoryId
     * @param includeClasses Include class names
     * @param includeMethods Include method names
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getRepositoryHierarchyV2V2RepositoriesRepositoryIdHierarchyGet(
        repositoryId: string,
        includeClasses: boolean = true,
        includeMethods: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/hierarchy',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'include_classes': includeClasses,
                'include_methods': includeMethods,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Rename repository
     * Update the display name of an indexed repository.
     * @param repositoryId
     * @param requestBody
     * @returns RenameResponse Successful Response
     * @throws ApiError
     */
    public static renameRepositoryV2V2RepositoriesRepositoryIdRenamePatch(
        repositoryId: string,
        requestBody: routes__v2__repositories__RenameRequest,
    ): CancelablePromise<RenameResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repositories/{repository_id}/rename',
            path: {
                'repository_id': repositoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get repository tree
     * Get file tree from GitHub API. Supports path and extension filtering.
     * @param repositoryId
     * @param branch Branch to get tree for
     * @param includePaths Comma-separated paths to include
     * @param excludePaths Comma-separated paths to exclude
     * @param fileExtensions Comma-separated extensions to include
     * @param excludeExtensions Comma-separated extensions to exclude
     * @param showFullPaths Show full file paths
     * @returns RepositoryTreeResponse Successful Response
     * @throws ApiError
     */
    public static getRepositoryTreeV2V2RepositoriesRepositoryIdTreeGet(
        repositoryId: string,
        branch?: (string | null),
        includePaths?: (string | null),
        excludePaths?: (string | null),
        fileExtensions?: (string | null),
        excludeExtensions?: (string | null),
        showFullPaths: boolean = false,
    ): CancelablePromise<RepositoryTreeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/tree',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'branch': branch,
                'include_paths': includePaths,
                'exclude_paths': excludePaths,
                'file_extensions': fileExtensions,
                'exclude_extensions': excludeExtensions,
                'show_full_paths': showFullPaths,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Index research paper
     * Index arXiv paper by URL or ID. Extracts metadata (title, authors, abstract) automatically.
     * @param requestBody
     * @returns routes__v2__data_sources__ResearchPaperResponse Successful Response
     * @throws ApiError
     */
    public static indexResearchPaperV2V2ResearchPapersPost(
        requestBody: routes__v2__data_sources__ResearchPaperRequest,
    ): CancelablePromise<routes__v2__data_sources__ResearchPaperResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/research-papers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List research papers
     * List all indexed research papers with metadata.
     * @param status Filter by status: processing, completed, failed
     * @param limit Maximum number of results
     * @param offset Pagination offset
     * @param organizationId Organization ID for org-level filtering
     * @param authorization
     * @returns ResearchPaperListResponse Successful Response
     * @throws ApiError
     */
    public static listResearchPapersV2V2ResearchPapersGet(
        status?: (string | null),
        limit: number = 50,
        offset?: number,
        organizationId?: (string | null),
        authorization?: (string | null),
    ): CancelablePromise<ResearchPaperListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/research-papers',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'status': status,
                'limit': limit,
                'offset': offset,
                'organization_id': organizationId,
            },
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
     * @deprecated
     * Deep research (Pro)
     * Multi-step research with AI analysis and citations. Pro subscription required.
     * @param requestBody
     * @returns DeepResearchResponse Successful Response
     * @throws ApiError
     */
    public static searchDeepV2V2SearchDeepPost(
        requestBody: DeepResearchRequest,
    ): CancelablePromise<DeepResearchResponse> {
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
    public static searchQueryV2V2SearchQueryPost(
        requestBody: QueryRequest,
    ): CancelablePromise<any> {
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
    public static searchUniversalV2V2SearchUniversalPost(
        requestBody: routes__v2__search__UniversalSearchRequest,
    ): CancelablePromise<any> {
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
    public static searchWebV2V2SearchWebPost(
        requestBody: WebSearchRequest,
    ): CancelablePromise<WebSearchResponse> {
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
    public static getSourceContentV2V2SourcesContentPost(
        requestBody: SourceContentRequest,
    ): CancelablePromise<SourceContentResponse> {
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
     * @deprecated
     * Universal Search V2
     * Universal search across all indexed public sources.
     *
     * DEPRECATED: Use /v2/search/universal instead. This endpoint will be removed in a future version.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static universalSearchV2V2UniversalSearchPost(
        requestBody: routes__v2__search__UniversalSearchRequest,
    ): CancelablePromise<any> {
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
    public static webSearchV2V2WebSearchPost(
        requestBody: WebSearchRequest,
    ): CancelablePromise<any> {
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
