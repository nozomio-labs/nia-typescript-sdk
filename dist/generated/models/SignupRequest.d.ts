export type SignupRequest = {
    /**
     * User email address
     */
    email: string;
    /**
     * Account password (min 8 chars)
     */
    password: string;
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
