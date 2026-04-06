import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiSourcesService {
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
    static listSourcesV2SourcesGet(type, query, status, categoryId, limit = 20, offset) {
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
    static createSourceV2SourcesPost(requestBody) {
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
     * Explore Global Sources
     * Browse the global catalog of publicly indexed sources.
     * @param search Search by URL or name
     * @param sourceType Filter by type: repository | documentation | research_paper | huggingface_dataset
     * @param status Filter by status
     * @param sort Sort: recently_indexed | recently_updated | most_tokens | most_snippets | most_subscribed | relevance
     * @param order Sort direction: asc | desc
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static exploreGlobalSourcesV2SourcesExploreGet(search = '', sourceType = '', status = 'indexed', sort = 'most_subscribed', order = 'desc', limit = 20, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/explore',
            query: {
                'search': search,
                'source_type': sourceType,
                'status': status,
                'sort': sort,
                'order': order,
                'limit': limit,
                'offset': offset,
            },
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
    static resolveSourceV2SourcesResolveGet(identifier, type) {
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
    static subscribeSourceV2SourcesSubscribePost(requestBody) {
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
    static createSourceUploadUrlV2SourcesUploadUrlPost(requestBody) {
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
    static getSourceV2SourcesSourceIdGet(sourceId, type) {
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
    static updateSourceV2SourcesSourceIdPatch(sourceId, requestBody, type) {
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
    static deleteSourceV2SourcesSourceIdDelete(sourceId, type) {
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
     * List Source Annotations
     * @param sourceId
     * @param type Source type hint
     * @returns SourceAnnotation Successful Response
     * @throws ApiError
     */
    static listSourceAnnotationsV2SourcesSourceIdAnnotationsGet(sourceId, type) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/annotations',
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
     * Create Source Annotation
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static createSourceAnnotationV2SourcesSourceIdAnnotationsPost(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/{source_id}/annotations',
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
     * Update Source Annotation
     * @param sourceId
     * @param annotationId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static updateSourceAnnotationV2SourcesSourceIdAnnotationsAnnotationIdPatch(sourceId, annotationId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/{source_id}/annotations/{annotation_id}',
            path: {
                'source_id': sourceId,
                'annotation_id': annotationId,
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
     * Delete Source Annotation
     * @param sourceId
     * @param annotationId
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static deleteSourceAnnotationV2SourcesSourceIdAnnotationsAnnotationIdDelete(sourceId, annotationId, type) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/{source_id}/annotations/{annotation_id}',
            path: {
                'source_id': sourceId,
                'annotation_id': annotationId,
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
    static getSourceClassificationV2SourcesSourceIdClassificationGet(sourceId, type) {
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
    static updateSourceClassificationV2SourcesSourceIdClassificationPatch(sourceId, requestBody, type) {
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
     * @param page PDF page number
     * @param treeNodeId PDF tree node identifier
     * @param lineStart Starting line number
     * @param lineEnd Ending line number
     * @param maxLength Maximum content length
     * @returns SourceContentResponse Successful Response
     * @throws ApiError
     */
    static getSourceContentV2SourcesSourceIdContentGet(sourceId, type, path, url, branch, page, treeNodeId, lineStart, lineEnd, maxLength) {
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
     * Get Source Curation
     * @param sourceId
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static getSourceCurationV2SourcesSourceIdCurationGet(sourceId, type) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/curation',
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
     * Update Source Curation
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static updateSourceCurationV2SourcesSourceIdCurationPut(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/{source_id}/curation',
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
     * Grep Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSourceV2SourcesSourceIdGrepPost(sourceId, requestBody, type) {
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
    static syncSourceV2SourcesSourceIdSyncPost(sourceId, requestBody, type) {
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
    static getSourceTreeV2SourcesSourceIdTreeGet(sourceId, type, branch, maxDepth = 10) {
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
}
