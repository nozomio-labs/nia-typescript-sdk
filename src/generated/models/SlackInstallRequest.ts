/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

