/**
 * BYOT: Register an external Slack bot token.
 */
export type SlackTokenRequest = {
    /**
     * Slack bot token (xoxb-...)
     */
    bot_token: string;
    /**
     * Display name for this workspace
     */
    name?: (string | null);
};
