export type LoginVerifyResponse = {
    /**
     * Your new nk_ API key — store it securely, it cannot be retrieved again
     */
    api_key: string;
    api_key_id: string;
    user_id: string;
    organization_id?: (string | null);
};
