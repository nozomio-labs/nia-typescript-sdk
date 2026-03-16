import type { routes__v2__x__XInstallationRequest } from '../models/routes__v2__x__XInstallationRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiXService {
    /**
     * List X Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listXInstallationsV2XInstallationsGet(): CancelablePromise<any>;
    /**
     * Create X Installation
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static createXInstallationV2XInstallationsPost(requestBody: routes__v2__x__XInstallationRequest): CancelablePromise<any>;
    /**
     * Get X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXInstallationV2XInstallationsInstallationIdGet(installationId: string): CancelablePromise<any>;
    /**
     * Delete X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteXInstallationV2XInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
    /**
     * Trigger X Index
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerXIndexV2XInstallationsInstallationIdIndexPost(installationId: string): CancelablePromise<any>;
    /**
     * Get X Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXIndexStatusV2XInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
}
