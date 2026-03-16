import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiXService {
    /**
     * List X Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listXInstallationsV2XInstallationsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/x/installations',
        });
    }
    /**
     * Create X Installation
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static createXInstallationV2XInstallationsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/x/installations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXInstallationV2XInstallationsInstallationIdGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/x/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteXInstallationV2XInstallationsInstallationIdDelete(installationId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/x/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger X Index
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerXIndexV2XInstallationsInstallationIdIndexPost(installationId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/x/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get X Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXIndexStatusV2XInstallationsInstallationIdStatusGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/x/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
