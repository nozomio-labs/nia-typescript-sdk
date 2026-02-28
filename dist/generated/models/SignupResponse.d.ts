export type SignupResponse = {
    user_id: string;
    organization_id: string;
    /**
     * One-time token to exchange for an API key via /v2/auth/bootstrap-key
     */
    bootstrap_token: string;
    expires_at: string;
    /**
     * Whether the email is already verified in the identity provider
     */
    email_verified?: boolean;
};
