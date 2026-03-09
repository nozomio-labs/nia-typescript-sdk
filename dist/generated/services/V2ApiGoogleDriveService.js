import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiGoogleDriveService {
    /**
     * Generate Install Url
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2GoogleDriveInstallPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/install',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Handle Oauth Callback
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2GoogleDriveInstallCallbackPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/install/callback',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Google Drive Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listGoogleDriveInstallationsV2GoogleDriveInstallationsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations',
        });
    }
    /**
     * Get Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdDelete(installationId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/google-drive/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static browseGoogleDriveItemsV2GoogleDriveInstallationsInstallationIdBrowseGet(installationId, folderId, q, pageToken, pageSize = 100) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}/browse',
            path: {
                'installation_id': installationId,
            },
            query: {
                'folder_id': folderId,
                'q': q,
                'page_token': pageToken,
                'page_size': pageSize,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Google Drive Index
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveIndexV2GoogleDriveInstallationsInstallationIdIndexPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Google Drive Selection
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}/selection',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Google Drive Selection
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/installations/{installation_id}/selection',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Google Drive Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveIndexStatusV2GoogleDriveInstallationsInstallationIdStatusGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Google Drive Sync
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveSyncV2GoogleDriveInstallationsInstallationIdSyncPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/installations/{installation_id}/sync',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
