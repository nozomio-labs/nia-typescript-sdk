import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesystemService {
    /**
     * Fs List
     * List all filesystem namespaces owned by the caller.
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsListV2FsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs',
        });
    }
    /**
     * Fs Create
     * Create a bare filesystem namespace. Returns a source_id you can
     * immediately write to via /v2/fs/{source_id}/files.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsCreateV2FsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Exec
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsExecV2FsSourceIdExecPost(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs/{source_id}/exec',
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
     * Fs Write
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteV2FsSourceIdFilesPut(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fs/{source_id}/files',
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
     * Fs Delete
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsDeleteV2FsSourceIdFilesDelete(sourceId, path) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fs/{source_id}/files',
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
     * Fs Write Batch
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteBatchV2FsSourceIdFilesBatchPut(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fs/{source_id}/files/batch',
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
     * Fs Find
     * @param sourceId
     * @param pattern Glob pattern (e.g. ***.ts)
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsFindV2FsSourceIdFindGet(sourceId, pattern) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/find',
            path: {
                'source_id': sourceId,
            },
            query: {
                'pattern': pattern,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Grep
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsGrepV2FsSourceIdGrepPost(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs/{source_id}/grep',
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
     * Fs Info
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsInfoV2FsSourceIdInfoGet(sourceId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/info',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Ls
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsLsV2FsSourceIdLsGet(sourceId, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/ls',
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
     * Fs Get Metadata
     * Get filesystem metadata + stats.
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsGetMetadataV2FsSourceIdMetadataGet(sourceId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/metadata',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Mkdir
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMkdirV2FsSourceIdMkdirPost(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs/{source_id}/mkdir',
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
     * Fs Mv
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMvV2FsSourceIdMvPost(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs/{source_id}/mv',
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
     * Fs Delete Namespace
     * Delete a filesystem namespace and all its files. Only works for
     * source_type=filesystem namespaces.
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsDeleteNamespaceV2FsSourceIdNamespaceDelete(sourceId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fs/{source_id}/namespace',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Read
     * @param sourceId
     * @param path File path to read
     * @param lineStart
     * @param lineEnd
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsReadV2FsSourceIdReadGet(sourceId, path, lineStart, lineEnd) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/read',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
                'line_start': lineStart,
                'line_end': lineEnd,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Tree
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsTreeV2FsSourceIdTreeGet(sourceId, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/tree',
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
}
