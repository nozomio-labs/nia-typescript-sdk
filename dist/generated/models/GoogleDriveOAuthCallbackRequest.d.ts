export type GoogleDriveOAuthCallbackRequest = {
    /**
     * Authorization code from Google
     */
    code: string;
    /**
     * Redirect URI used in the authorization request
     */
    redirect_uri?: (string | null);
};
