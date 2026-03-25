/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConnectorsService {
    /**
     * List Available Connectors
     * List all available connector types with their metadata.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listAvailableConnectorsV2ConnectorsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors',
        });
    }
    /**
     * List Installations
     * List all connector installations for the current user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listInstallationsV2ConnectorsInstallationsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors/installations',
        });
    }
    /**
     * Delete Installation
     * Disconnect a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteInstallationV2ConnectorsInstallationsInstallationIdDelete(
        installationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/connectors/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Index Installation
     * Trigger indexing for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static indexInstallationV2ConnectorsInstallationsInstallationIdIndexPost(
        installationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connectors/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Schedule
     * Update sync schedule for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateScheduleV2ConnectorsInstallationsInstallationIdSchedulePatch(
        installationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/connectors/installations/{installation_id}/schedule',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Installation Status
     * Get sync status and health for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getInstallationStatusV2ConnectorsInstallationsInstallationIdStatusGet(
        installationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Install Connector
     * Install a connector — either store API key or initiate OAuth flow.
     * @param connectorType
     * @returns any Successful Response
     * @throws ApiError
     */
    public static installConnectorV2ConnectorsConnectorTypeInstallPost(
        connectorType: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connectors/{connector_type}/install',
            path: {
                'connector_type': connectorType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Oauth Callback
     * Handle OAuth callback — exchange code, create installation, redirect to frontend.
     * @param connectorType
     * @param code
     * @param state
     * @returns any Successful Response
     * @throws ApiError
     */
    public static oauthCallbackV2ConnectorsConnectorTypeOauthCallbackGet(
        connectorType: string,
        code: string,
        state: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors/{connector_type}/oauth/callback',
            path: {
                'connector_type': connectorType,
            },
            query: {
                'code': code,
                'state': state,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
