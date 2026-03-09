/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleDriveInstallRequest } from '../models/GoogleDriveInstallRequest';
import type { GoogleDriveOAuthCallbackRequest } from '../models/GoogleDriveOAuthCallbackRequest';
import type { routes__v2__google_drive__GoogleDriveIndexRequest } from '../models/routes__v2__google_drive__GoogleDriveIndexRequest';
import type { routes__v2__google_drive__GoogleDriveSelectionRequest } from '../models/routes__v2__google_drive__GoogleDriveSelectionRequest';
import type { routes__v2__google_drive__GoogleDriveSyncRequest } from '../models/routes__v2__google_drive__GoogleDriveSyncRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiGoogleDriveService {
    /**
     * Generate Install Url
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static generateInstallUrlV2GoogleDriveInstallPost(
        requestBody: GoogleDriveInstallRequest,
    ): CancelablePromise<any> {
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
    public static handleOauthCallbackV2GoogleDriveInstallCallbackPost(
        requestBody: GoogleDriveOAuthCallbackRequest,
    ): CancelablePromise<any> {
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
    public static listGoogleDriveInstallationsV2GoogleDriveInstallationsGet(): CancelablePromise<any> {
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
    public static getGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdGet(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static deleteGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdDelete(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static browseGoogleDriveItemsV2GoogleDriveInstallationsInstallationIdBrowseGet(
        installationId: string,
        folderId?: (string | null),
        q?: (string | null),
        pageToken?: (string | null),
        pageSize: number = 100,
    ): CancelablePromise<any> {
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
    public static triggerGoogleDriveIndexV2GoogleDriveInstallationsInstallationIdIndexPost(
        installationId: string,
        requestBody?: (routes__v2__google_drive__GoogleDriveIndexRequest | null),
    ): CancelablePromise<any> {
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
    public static getGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionGet(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static updateGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionPost(
        installationId: string,
        requestBody: routes__v2__google_drive__GoogleDriveSelectionRequest,
    ): CancelablePromise<any> {
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
    public static getGoogleDriveIndexStatusV2GoogleDriveInstallationsInstallationIdStatusGet(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static triggerGoogleDriveSyncV2GoogleDriveInstallationsInstallationIdSyncPost(
        installationId: string,
        requestBody?: (routes__v2__google_drive__GoogleDriveSyncRequest | null),
    ): CancelablePromise<any> {
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
