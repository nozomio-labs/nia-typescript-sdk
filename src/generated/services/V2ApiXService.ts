/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { routes__v2__x__XInstallationRequest } from '../models/routes__v2__x__XInstallationRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiXService {
    /**
     * List X Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listXInstallationsV2XInstallationsGet(): CancelablePromise<any> {
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
    public static createXInstallationV2XInstallationsPost(
        requestBody: routes__v2__x__XInstallationRequest,
    ): CancelablePromise<any> {
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
    public static getXInstallationV2XInstallationsInstallationIdGet(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static deleteXInstallationV2XInstallationsInstallationIdDelete(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static triggerXIndexV2XInstallationsInstallationIdIndexPost(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static getXIndexStatusV2XInstallationsInstallationIdStatusGet(
        installationId: string,
    ): CancelablePromise<any> {
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
