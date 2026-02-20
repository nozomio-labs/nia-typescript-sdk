/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Handle the OAuth callback from Slack.
 */
export type SlackOAuthCallbackRequest = {
    /**
     * Authorization code from Slack
     */
    code: string;
    /**
     * Redirect URI used in the authorization request
     */
    redirect_uri?: (string | null);
};

