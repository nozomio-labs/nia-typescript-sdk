import type { routes__v2__slack__SlackChannelsConfigRequest } from '../models/routes__v2__slack__SlackChannelsConfigRequest';
import type { SlackGrepRequest } from '../models/SlackGrepRequest';
import type { SlackInstallRequest } from '../models/SlackInstallRequest';
import type { SlackOAuthCallbackRequest } from '../models/SlackOAuthCallbackRequest';
import type { SlackTokenRequest } from '../models/SlackTokenRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiSlackService {
    /**
     * Generate Install Url
     * Generate a Slack OAuth authorization URL.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2SlackInstallPost(requestBody: SlackInstallRequest): CancelablePromise<any>;
    /**
     * Handle Oauth Callback
     * Exchange an OAuth code for tokens and create the installation.
     *
     * Called by the frontend callback route after the user authorizes the Slack app.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2SlackInstallCallbackPost(requestBody: SlackOAuthCallbackRequest): CancelablePromise<any>;
    /**
     * Register External Token
     * Register an external Slack bot token (BYOT).
     *
     * For multi-tenant scenarios: your customers provide their Slack bot token
     * and you manage it through Nia's API.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static registerExternalTokenV2SlackInstallTokenPost(requestBody: SlackTokenRequest): CancelablePromise<any>;
    /**
     * List Slack Installations
     * List all Slack workspace connections for the authenticated user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackInstallationsV2SlackInstallationsGet(): CancelablePromise<any>;
    /**
     * Get Slack Installation
     * Get details for a specific Slack installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackInstallationV2SlackInstallationsInstallationIdGet(installationId: string): CancelablePromise<any>;
    /**
     * Delete Slack Installation
     * Disconnect a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteSlackInstallationV2SlackInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
    /**
     * List Slack Channels
     * List available Slack channels from the workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackChannelsV2SlackInstallationsInstallationIdChannelsGet(installationId: string): CancelablePromise<any>;
    /**
     * Configure Slack Channels
     * Configure which channels to index.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static configureSlackChannelsV2SlackInstallationsInstallationIdChannelsPost(installationId: string, requestBody: routes__v2__slack__SlackChannelsConfigRequest): CancelablePromise<any>;
    /**
     * Grep Slack Messages
     * BM25 keyword search over indexed Slack messages in TurboPuffer.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSlackMessagesV2SlackInstallationsInstallationIdGrepPost(installationId: string, requestBody: SlackGrepRequest): CancelablePromise<any>;
    /**
     * Trigger Slack Index
     * Trigger a full re-index of the Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerSlackIndexV2SlackInstallationsInstallationIdIndexPost(installationId: string): CancelablePromise<any>;
    /**
     * Read Slack Messages
     * Read recent messages from a Slack channel (live from Slack API).
     * @param installationId
     * @param channel
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    static readSlackMessagesV2SlackInstallationsInstallationIdMessagesGet(installationId: string, channel?: (string | null), limit?: number): CancelablePromise<any>;
    /**
     * Get Slack Index Status
     * Get the indexing status for a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackIndexStatusV2SlackInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
}
