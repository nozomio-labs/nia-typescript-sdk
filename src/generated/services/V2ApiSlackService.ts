/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { routes__v2__slack__SlackChannelsConfigRequest } from '../models/routes__v2__slack__SlackChannelsConfigRequest';
import type { SlackGrepRequest } from '../models/SlackGrepRequest';
import type { SlackInstallRequest } from '../models/SlackInstallRequest';
import type { SlackOAuthCallbackRequest } from '../models/SlackOAuthCallbackRequest';
import type { SlackTokenRequest } from '../models/SlackTokenRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static generateInstallUrlV2SlackInstallPost(
        requestBody: SlackInstallRequest,
    ): CancelablePromise<any> {
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
    public static handleOauthCallbackV2SlackInstallCallbackPost(
        requestBody: SlackOAuthCallbackRequest,
    ): CancelablePromise<any> {
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
    public static registerExternalTokenV2SlackInstallTokenPost(
        requestBody: SlackTokenRequest,
    ): CancelablePromise<any> {
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
    public static listSlackInstallationsV2SlackInstallationsGet(): CancelablePromise<any> {
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
    public static getSlackInstallationV2SlackInstallationsInstallationIdGet(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static deleteSlackInstallationV2SlackInstallationsInstallationIdDelete(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static listSlackChannelsV2SlackInstallationsInstallationIdChannelsGet(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static configureSlackChannelsV2SlackInstallationsInstallationIdChannelsPost(
        installationId: string,
        requestBody: routes__v2__slack__SlackChannelsConfigRequest,
    ): CancelablePromise<any> {
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
    public static grepSlackMessagesV2SlackInstallationsInstallationIdGrepPost(
        installationId: string,
        requestBody: SlackGrepRequest,
    ): CancelablePromise<any> {
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
    public static triggerSlackIndexV2SlackInstallationsInstallationIdIndexPost(
        installationId: string,
    ): CancelablePromise<any> {
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
    public static readSlackMessagesV2SlackInstallationsInstallationIdMessagesGet(
        installationId: string,
        channel?: (string | null),
        limit: number = 50,
    ): CancelablePromise<any> {
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
    public static getSlackIndexStatusV2SlackInstallationsInstallationIdStatusGet(
        installationId: string,
    ): CancelablePromise<any> {
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
