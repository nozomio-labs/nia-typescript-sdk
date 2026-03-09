import type { ClassifyLocalFolderRequest } from '../models/ClassifyLocalFolderRequest';
import type { GlobalSourceSubscribeRequest } from '../models/GlobalSourceSubscribeRequest';
import type { GlobalSourceSubscribeResponse } from '../models/GlobalSourceSubscribeResponse';
import type { Source } from '../models/Source';
import type { SourceCreateRequest } from '../models/SourceCreateRequest';
import type { SourceDeleteResponse } from '../models/SourceDeleteResponse';
import type { SourceListResponse } from '../models/SourceListResponse';
import type { SourceResolveResponse } from '../models/SourceResolveResponse';
import type { SourceUpdateRequest } from '../models/SourceUpdateRequest';
import type { SourceUploadUrlRequest } from '../models/SourceUploadUrlRequest';
import type { SourceUploadUrlResponse } from '../models/SourceUploadUrlResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiSourcesService {
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
    static listSourcesV2SourcesGet(type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null), query?: (string | null), status?: (string | null), categoryId?: (string | null), limit?: number, offset?: number): CancelablePromise<SourceListResponse>;
    /**
     * Create Source
     * @param requestBody
     * @returns Source Successful Response
     * @throws ApiError
     */
    static createSourceV2SourcesPost(requestBody: SourceCreateRequest): CancelablePromise<Source>;
    /**
     * Resolve Source
     * @param identifier Display name, URL, or slug
     * @param type Source type hint
     * @returns SourceResolveResponse Successful Response
     * @throws ApiError
     */
    static resolveSourceV2SourcesResolveGet(identifier: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<SourceResolveResponse>;
    /**
     * Subscribe to a global source
     * Subscribe to an existing globally indexed public source. Creates a local reference for instant access without re-indexing.
     * @param requestBody
     * @returns GlobalSourceSubscribeResponse Successful Response
     * @throws ApiError
     */
    static subscribeSourceV2SourcesSubscribePost(requestBody: GlobalSourceSubscribeRequest): CancelablePromise<GlobalSourceSubscribeResponse>;
    /**
     * Get PDF upload URL
     * Generate a signed URL for direct PDF upload. Use the returned gcs_path in POST /v2/sources.
     * @param requestBody
     * @returns SourceUploadUrlResponse Successful Response
     * @throws ApiError
     */
    static createSourceUploadUrlV2SourcesUploadUrlPost(requestBody: SourceUploadUrlRequest): CancelablePromise<SourceUploadUrlResponse>;
    /**
     * Get Source
     * @param sourceId
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    static getSourceV2SourcesSourceIdGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<Source>;
    /**
     * Update Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    static updateSourceV2SourcesSourceIdPatch(sourceId: string, requestBody: SourceUpdateRequest, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<Source>;
    /**
     * Delete Source
     * @param sourceId
     * @param type Source type hint
     * @returns SourceDeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteSourceV2SourcesSourceIdDelete(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<SourceDeleteResponse>;
    /**
     * Get Source Classification
     * @param sourceId
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSourceClassificationV2SourcesSourceIdClassificationGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<any>;
    /**
     * Update Source Classification
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateSourceClassificationV2SourcesSourceIdClassificationPatch(sourceId: string, requestBody: ClassifyLocalFolderRequest, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<any>;
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
    static getSourceContentV2SourcesSourceIdContentGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null), path?: (string | null), url?: (string | null), branch?: (string | null)): CancelablePromise<any>;
    /**
     * Grep Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSourceV2SourcesSourceIdGrepPost(sourceId: string, requestBody: Record<string, any>, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<any>;
    /**
     * Sync Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static syncSourceV2SourcesSourceIdSyncPost(sourceId: string, requestBody: Record<string, any>, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null)): CancelablePromise<any>;
    /**
     * Get Source Tree
     * @param sourceId
     * @param type Source type hint
     * @param branch Repository branch
     * @param maxDepth
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSourceTreeV2SourcesSourceIdTreeGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | null), branch?: (string | null), maxDepth?: number): CancelablePromise<any>;
}
