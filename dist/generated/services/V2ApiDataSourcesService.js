import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiDataSourcesService {
    /**
     * Index a data source
     * Index a documentation site or web content. Supports URL patterns, llms.txt, and crawl depth limits.
     * @param requestBody
     * @returns routes__v2__data_sources__DataSourceResponse Successful Response
     * @throws ApiError
     */
    static createDataSourceV2V2DataSourcesPost(requestBody) {
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
    static listDataSourcesV2V2DataSourcesGet(q, status, sourceType, categoryId, limit = 100, offset, includeTree = true) {
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
    static renameDataSourceV2V2DataSourcesRenamePatch(requestBody) {
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
    static getDataSourceV2V2DataSourcesSourceIdGet(sourceId) {
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
    static deleteDataSourceV2V2DataSourcesSourceIdDelete(sourceId) {
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
    static assignDataSourceCategoryV2DataSourcesSourceIdCategoryPatch(sourceId, requestBody) {
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
    static getDataSourceContentV2V2DataSourcesSourceIdContentGet(sourceId, path, url) {
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
    static grepDocumentationV2V2DataSourcesSourceIdGrepPost(sourceId, requestBody) {
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
    static listDocumentationDirectoryV2V2DataSourcesSourceIdLsGet(sourceId, path = '/') {
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
    static readDocumentationFileV2V2DataSourcesSourceIdReadGet(sourceId, path, page, treeNodeId, lineStart, lineEnd, maxLength) {
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
    static renameDataSourceLegacyV2DataSourcesSourceIdRenamePatch(sourceId, requestBody) {
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
    static getDocumentationTreeV2V2DataSourcesSourceIdTreeGet(sourceId) {
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
     * Index HuggingFace dataset
     * Index a HuggingFace dataset by URL or identifier. Extracts metadata (splits, columns, row counts) automatically.
     * @param requestBody
     * @returns HuggingFaceDatasetResponse Successful Response
     * @throws ApiError
     */
    static indexHuggingfaceDatasetV2V2HuggingfaceDatasetsPost(requestBody) {
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
    static listHuggingfaceDatasetsV2V2HuggingfaceDatasetsGet(status, limit = 50, offset, organizationId) {
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
    static getImageSignedUrlV2V2ImagesSignedUrlPost(requestBody) {
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
     * Index research paper
     * Index arXiv paper by URL or ID. Extracts metadata (title, authors, abstract) automatically.
     * @param requestBody
     * @returns routes__v2__data_sources__ResearchPaperResponse Successful Response
     * @throws ApiError
     */
    static indexResearchPaperV2V2ResearchPapersPost(requestBody) {
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
    static listResearchPapersV2V2ResearchPapersGet(status, limit = 50, offset, organizationId, authorization) {
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
}
