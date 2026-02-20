import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiSlackService {
    /**
     * Generate Install Url
     * Generate a Slack OAuth authorization URL.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2SlackInstallPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/install',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Handle Oauth Callback
     * Exchange an OAuth code for tokens and create the installation.
     *
     * Called by the frontend callback route after the user authorizes the Slack app.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2SlackInstallCallbackPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/install/callback',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static registerExternalTokenV2SlackInstallTokenPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/install/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Slack Installations
     * List all Slack workspace connections for the authenticated user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackInstallationsV2SlackInstallationsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations',
        });
    }
    /**
     * Get Slack Installation
     * Get details for a specific Slack installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackInstallationV2SlackInstallationsInstallationIdGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Slack Installation
     * Disconnect a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteSlackInstallationV2SlackInstallationsInstallationIdDelete(installationId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/slack/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Slack Channels
     * List available Slack channels from the workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackChannelsV2SlackInstallationsInstallationIdChannelsGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}/channels',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Configure Slack Channels
     * Configure which channels to index.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static configureSlackChannelsV2SlackInstallationsInstallationIdChannelsPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/installations/{installation_id}/channels',
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
     * Grep Slack Messages
     * BM25 keyword search over indexed Slack messages in TurboPuffer.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSlackMessagesV2SlackInstallationsInstallationIdGrepPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/installations/{installation_id}/grep',
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
     * Trigger Slack Index
     * Trigger a full re-index of the Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerSlackIndexV2SlackInstallationsInstallationIdIndexPost(installationId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Slack Messages
     * Read recent messages from a Slack channel (live from Slack API).
     * @param installationId
     * @param channel
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    static readSlackMessagesV2SlackInstallationsInstallationIdMessagesGet(installationId, channel, limit = 50) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}/messages',
            path: {
                'installation_id': installationId,
            },
            query: {
                'channel': channel,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Slack Index Status
     * Get the indexing status for a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackIndexStatusV2SlackInstallationsInstallationIdStatusGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
