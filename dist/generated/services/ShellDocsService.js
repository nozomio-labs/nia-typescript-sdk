import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShellDocsService {
    /**
     * Index Docs
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static indexDocsV2ShellDocsIndexPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/shell-docs/index',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Check Status
     * @param url Documentation URL
     * @returns any Successful Response
     * @throws ApiError
     */
    static checkStatusV2ShellDocsStatusGet(url) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/status',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Find
     * @param namespace
     * @param pattern Glob pattern (e.g. ***.md)
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsFindV2ShellDocsNamespaceFindGet(namespace, pattern) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/find',
            path: {
                'namespace': namespace,
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
     * Shell Docs Grep
     * @param namespace
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsGrepV2ShellDocsNamespaceGrepPost(namespace, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/shell-docs/{namespace}/grep',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Info
     * @param namespace
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsInfoV2ShellDocsNamespaceInfoGet(namespace) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/info',
            path: {
                'namespace': namespace,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Ls
     * @param namespace
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsLsV2ShellDocsNamespaceLsGet(namespace, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/ls',
            path: {
                'namespace': namespace,
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
     * Shell Docs Read
     * @param namespace
     * @param path File path to read
     * @param lineStart
     * @param lineEnd
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsReadV2ShellDocsNamespaceReadGet(namespace, path, lineStart, lineEnd) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/read',
            path: {
                'namespace': namespace,
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
     * Shell Docs Tree
     * @param namespace
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsTreeV2ShellDocsNamespaceTreeGet(namespace, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/tree',
            path: {
                'namespace': namespace,
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
