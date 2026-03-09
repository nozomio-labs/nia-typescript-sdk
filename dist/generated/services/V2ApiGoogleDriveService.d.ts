import type { GoogleDriveInstallRequest } from '../models/GoogleDriveInstallRequest';
import type { GoogleDriveOAuthCallbackRequest } from '../models/GoogleDriveOAuthCallbackRequest';
import type { routes__v2__google_drive__GoogleDriveIndexRequest } from '../models/routes__v2__google_drive__GoogleDriveIndexRequest';
import type { routes__v2__google_drive__GoogleDriveSelectionRequest } from '../models/routes__v2__google_drive__GoogleDriveSelectionRequest';
import type { routes__v2__google_drive__GoogleDriveSyncRequest } from '../models/routes__v2__google_drive__GoogleDriveSyncRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiGoogleDriveService {
    /**
     * Generate Install Url
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2GoogleDriveInstallPost(requestBody: GoogleDriveInstallRequest): CancelablePromise<any>;
    /**
     * Handle Oauth Callback
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2GoogleDriveInstallCallbackPost(requestBody: GoogleDriveOAuthCallbackRequest): CancelablePromise<any>;
    /**
     * List Google Drive Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listGoogleDriveInstallationsV2GoogleDriveInstallationsGet(): CancelablePromise<any>;
    /**
     * Get Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdGet(installationId: string): CancelablePromise<any>;
    /**
     * Delete Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
    /**
     * Browse Google Drive Items
     * @param installationId
     * @param folderId Optional Drive folder ID to browse
     * @param q Optional Drive item name search
     * @param pageToken Pagination token from the previous response
     * @param pageSize Maximum Drive items to return
     * @returns any Successful Response
     * @throws ApiError
     */
    static browseGoogleDriveItemsV2GoogleDriveInstallationsInstallationIdBrowseGet(installationId: string, folderId?: (string | null), q?: (string | null), pageToken?: (string | null), pageSize?: number): CancelablePromise<any>;
    /**
     * Trigger Google Drive Index
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveIndexV2GoogleDriveInstallationsInstallationIdIndexPost(installationId: string, requestBody?: (routes__v2__google_drive__GoogleDriveIndexRequest | null)): CancelablePromise<any>;
    /**
     * Get Google Drive Selection
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionGet(installationId: string): CancelablePromise<any>;
    /**
     * Update Google Drive Selection
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionPost(installationId: string, requestBody: routes__v2__google_drive__GoogleDriveSelectionRequest): CancelablePromise<any>;
    /**
     * Get Google Drive Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveIndexStatusV2GoogleDriveInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
    /**
     * Trigger Google Drive Sync
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveSyncV2GoogleDriveInstallationsInstallationIdSyncPost(installationId: string, requestBody?: (routes__v2__google_drive__GoogleDriveSyncRequest | null)): CancelablePromise<any>;
}
