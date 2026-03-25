import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConnectorsService {
    /**
     * List Available Connectors
     * List all available connector types with their metadata.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listAvailableConnectorsV2ConnectorsGet() {
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
    static listInstallationsV2ConnectorsInstallationsGet() {
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
    static deleteInstallationV2ConnectorsInstallationsInstallationIdDelete(installationId) {
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
    static indexInstallationV2ConnectorsInstallationsInstallationIdIndexPost(installationId) {
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
    static updateScheduleV2ConnectorsInstallationsInstallationIdSchedulePatch(installationId) {
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
    static getInstallationStatusV2ConnectorsInstallationsInstallationIdStatusGet(installationId) {
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
    static installConnectorV2ConnectorsConnectorTypeInstallPost(connectorType) {
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
    static oauthCallbackV2ConnectorsConnectorTypeOauthCallbackGet(connectorType, code, state) {
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
