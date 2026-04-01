/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SignupResponse = {
    /**
     * Read-only API key — verify via POST /v2/auth/verify to unlock full access
     */
    api_key: string;
    api_key_id: string;
    user_id: string;
    organization_id: string;
    /**
     * Whether the account has been verified (always false on signup)
     */
    verified?: boolean;
};

