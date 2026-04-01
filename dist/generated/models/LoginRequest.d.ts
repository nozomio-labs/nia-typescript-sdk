export type LoginRequest = {
    email: string;
    /**
     * Org to scope the new key to (must be a member)
     */
    organization_id?: (string | null);
};
