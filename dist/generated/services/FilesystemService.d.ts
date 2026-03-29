import type { GrepRequestBody } from '../models/GrepRequestBody';
import type { MkdirBody } from '../models/MkdirBody';
import type { MoveBody } from '../models/MoveBody';
import type { WriteBatchBody } from '../models/WriteBatchBody';
import type { WriteFileBody } from '../models/WriteFileBody';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FilesystemService {
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
