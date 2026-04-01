export type LoginVerifyRequest = {
    email: string;
    /**
     * 6-digit verification code from email
     */
    code: string;
    /**
     * Org to scope the new key to (must be a member)
     */
    organization_id?: (string | null);
};
