import type { GrepRequest } from '../models/GrepRequest';
import type { IndexRequest } from '../models/IndexRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ShellDocsService {
    /**
     * Index Docs
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static indexDocsV2ShellDocsIndexPost(requestBody: IndexRequest): CancelablePromise<any>;
    /**
     * Check Status
     * @param url Documentation URL
     * @returns any Successful Response
     * @throws ApiError
     */
    static checkStatusV2ShellDocsStatusGet(url: string): CancelablePromise<any>;
    /**
     * Shell Docs Find
     * @param namespace
     * @param pattern Glob pattern (e.g. ***.md)
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsFindV2ShellDocsNamespaceFindGet(namespace: string, pattern: string): CancelablePromise<any>;
    /**
     * Shell Docs Grep
     * @param namespace
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsGrepV2ShellDocsNamespaceGrepPost(namespace: string, requestBody: GrepRequest): CancelablePromise<any>;
    /**
     * Shell Docs Info
     * @param namespace
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsInfoV2ShellDocsNamespaceInfoGet(namespace: string): CancelablePromise<any>;
    /**
     * Shell Docs Ls
     * @param namespace
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsLsV2ShellDocsNamespaceLsGet(namespace: string, path?: string): CancelablePromise<any>;
    /**
     * Shell Docs Read
     * @param namespace
     * @param path File path to read
     * @param lineStart
     * @param lineEnd
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsReadV2ShellDocsNamespaceReadGet(namespace: string, path: string, lineStart?: (number | null), lineEnd?: (number | null)): CancelablePromise<any>;
    /**
     * Shell Docs Tree
     * @param namespace
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsTreeV2ShellDocsNamespaceTreeGet(namespace: string, path?: string): CancelablePromise<any>;
}
