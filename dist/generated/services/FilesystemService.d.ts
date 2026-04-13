import type { CreateFilesystemBody } from '../models/CreateFilesystemBody';
import type { ExecBody } from '../models/ExecBody';
import type { GrepRequestBody } from '../models/GrepRequestBody';
import type { MkdirBody } from '../models/MkdirBody';
import type { MoveBody } from '../models/MoveBody';
import type { WriteBatchBody } from '../models/WriteBatchBody';
import type { WriteFileBody } from '../models/WriteFileBody';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FilesystemService {
    /**
     * Fs List
     * List all filesystem namespaces owned by the caller.
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsListV2FsGet(): CancelablePromise<any>;
    /**
     * Fs Create
     * Create a bare filesystem namespace. Returns a source_id you can
     * immediately write to via /v2/fs/{source_id}/files.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsCreateV2FsPost(requestBody: CreateFilesystemBody): CancelablePromise<any>;
    /**
     * Fs Exec
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsExecV2FsSourceIdExecPost(sourceId: string, requestBody: ExecBody): CancelablePromise<any>;
    /**
     * Fs Write
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteV2FsSourceIdFilesPut(sourceId: string, requestBody: WriteFileBody): CancelablePromise<any>;
    /**
     * Fs Delete
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsDeleteV2FsSourceIdFilesDelete(sourceId: string, path: string): CancelablePromise<any>;
    /**
     * Fs Write Batch
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteBatchV2FsSourceIdFilesBatchPut(sourceId: string, requestBody: WriteBatchBody): CancelablePromise<any>;
    /**
     * Fs Find
     * @param sourceId
     * @param pattern Glob pattern (e.g. ***.ts)
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsFindV2FsSourceIdFindGet(sourceId: string, pattern: string): CancelablePromise<any>;
    /**
     * Fs Grep
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsGrepV2FsSourceIdGrepPost(sourceId: string, requestBody: GrepRequestBody): CancelablePromise<any>;
    /**
     * Fs Info
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsInfoV2FsSourceIdInfoGet(sourceId: string): CancelablePromise<any>;
    /**
     * Fs Ls
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsLsV2FsSourceIdLsGet(sourceId: string, path?: string): CancelablePromise<any>;
    /**
     * Fs Get Metadata
     * Get filesystem metadata + stats.
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsGetMetadataV2FsSourceIdMetadataGet(sourceId: string): CancelablePromise<any>;
    /**
     * Fs Mkdir
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMkdirV2FsSourceIdMkdirPost(sourceId: string, requestBody: MkdirBody): CancelablePromise<any>;
    /**
     * Fs Mv
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMvV2FsSourceIdMvPost(sourceId: string, requestBody: MoveBody): CancelablePromise<any>;
    /**
     * Fs Delete Namespace
     * Delete a filesystem namespace and all its files. Only works for
     * source_type=filesystem namespaces.
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsDeleteNamespaceV2FsSourceIdNamespaceDelete(sourceId: string): CancelablePromise<any>;
    /**
     * Fs Read
     * @param sourceId
     * @param path File path to read
     * @param lineStart
     * @param lineEnd
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsReadV2FsSourceIdReadGet(sourceId: string, path: string, lineStart?: (number | null), lineEnd?: (number | null)): CancelablePromise<any>;
    /**
     * Fs Tree
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsTreeV2FsSourceIdTreeGet(sourceId: string, path?: string): CancelablePromise<any>;
}
