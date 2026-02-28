export type LoginKeyRequest = {
    email: string;
    password: string;
    /**
     * Org to scope the new key to (must be a member)
     */
    organization_id?: (string | null);
    idempotency_key?: (string | null);
};
