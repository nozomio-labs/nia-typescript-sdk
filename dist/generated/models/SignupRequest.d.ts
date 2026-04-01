export type SignupRequest = {
    /**
     * User email address
     */
    email: string;
    /**
     * Optional password for web login (random if omitted)
     */
    password?: (string | null);
    first_name?: (string | null);
    last_name?: (string | null);
    /**
     * Organization name (required — all API keys are org-scoped)
     */
    organization_name: string;
    /**
     * Idempotency key for safe retries
     */
    idempotency_key?: (string | null);
};
