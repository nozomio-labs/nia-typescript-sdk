export type GoogleDriveInstallRequest = {
    /**
     * Optional OAuth redirect URI override. Defaults to the backend callback URL.
     */
    redirect_uri?: (string | null);
    /**
     * Optional scope override. Defaults to readonly Drive scopes.
     */
    scopes?: (Array<string> | null);
};
