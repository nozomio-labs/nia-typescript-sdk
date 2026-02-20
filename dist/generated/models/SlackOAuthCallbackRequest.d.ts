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
