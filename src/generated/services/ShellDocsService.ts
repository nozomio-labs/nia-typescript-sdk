/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GrepRequest } from '../models/GrepRequest';
import type { IndexRequest } from '../models/IndexRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShellDocsService {
    /**
     * Index Docs
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static indexDocsV2ShellDocsIndexPost(
        requestBody: IndexRequest,
    ): CancelablePromise<any> {
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
     * Shell Docs Load
     * Combined status + dump in one request. Returns status info + files if indexed.
     * @param url Documentation URL
     * @param pathsOnly Return paths without content (for lazy loading)
     * @returns any Successful Response
     * @throws ApiError
     */
    public static shellDocsLoadV2ShellDocsLoadGet(
        url: string,
        pathsOnly: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/load',
            query: {
                'url': url,
                'paths_only': pathsOnly,
            },
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
    public static checkStatusV2ShellDocsStatusGet(
        url: string,
    ): CancelablePromise<any> {
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
     * Shell Docs Dump
     * @param namespace
     * @param pathsOnly
     * @returns any Successful Response
     * @throws ApiError
     */
    public static shellDocsDumpV2ShellDocsNamespaceDumpGet(
        namespace: string,
        pathsOnly: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/dump',
            path: {
                'namespace': namespace,
            },
            query: {
                'paths_only': pathsOnly,
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
    public static shellDocsFindV2ShellDocsNamespaceFindGet(
        namespace: string,
        pattern: string,
    ): CancelablePromise<any> {
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
    public static shellDocsGrepV2ShellDocsNamespaceGrepPost(
        namespace: string,
        requestBody: GrepRequest,
    ): CancelablePromise<any> {
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
    public static shellDocsInfoV2ShellDocsNamespaceInfoGet(
        namespace: string,
    ): CancelablePromise<any> {
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
    public static shellDocsLsV2ShellDocsNamespaceLsGet(
        namespace: string,
        path: string = '/',
    ): CancelablePromise<any> {
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
    public static shellDocsReadV2ShellDocsNamespaceReadGet(
        namespace: string,
        path: string,
        lineStart?: (number | null),
        lineEnd?: (number | null),
    ): CancelablePromise<any> {
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
    public static shellDocsTreeV2ShellDocsNamespaceTreeGet(
        namespace: string,
        path: string = '/',
    ): CancelablePromise<any> {
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
