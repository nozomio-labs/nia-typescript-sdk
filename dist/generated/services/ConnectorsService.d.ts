import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ConnectorsService {
    /**
     * List Available Connectors
     * List all available connector types with their metadata.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listAvailableConnectorsV2ConnectorsGet(): CancelablePromise<any>;
    /**
     * List Installations
     * List all connector installations for the current user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listInstallationsV2ConnectorsInstallationsGet(): CancelablePromise<any>;
    /**
     * Delete Installation
     * Disconnect a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteInstallationV2ConnectorsInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
    /**
     * Index Installation
     * Trigger indexing for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static indexInstallationV2ConnectorsInstallationsInstallationIdIndexPost(installationId: string): CancelablePromise<any>;
    /**
     * Update Schedule
     * Update sync schedule for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateScheduleV2ConnectorsInstallationsInstallationIdSchedulePatch(installationId: string): CancelablePromise<any>;
    /**
     * Get Installation Status
     * Get sync status and health for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getInstallationStatusV2ConnectorsInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
    /**
     * Install Connector
     * Install a connector — either store API key or initiate OAuth flow.
     * @param connectorType
     * @returns any Successful Response
     * @throws ApiError
     */
    static installConnectorV2ConnectorsConnectorTypeInstallPost(connectorType: string): CancelablePromise<any>;
    /**
     * Oauth Callback
     * Handle OAuth callback — exchange code, create installation, redirect to frontend.
     * @param connectorType
     * @param code
     * @param state
     * @returns any Successful Response
     * @throws ApiError
     */
    static oauthCallbackV2ConnectorsConnectorTypeOauthCallbackGet(connectorType: string, code: string, state: string): CancelablePromise<any>;
}
