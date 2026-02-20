/**
 * Generate an OAuth URL to install Nia's Slack app.
 */
export type SlackInstallRequest = {
    /**
     * Custom OAuth redirect URI
     */
    redirect_uri?: (string | null);
    /**
     * Override default bot scopes
     */
    scopes?: (Array<string> | null);
};
