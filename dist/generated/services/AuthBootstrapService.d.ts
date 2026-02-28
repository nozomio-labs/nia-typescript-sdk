import type { BootstrapKeyRequest } from '../models/BootstrapKeyRequest';
import type { BootstrapKeyResponse } from '../models/BootstrapKeyResponse';
import type { LoginKeyRequest } from '../models/LoginKeyRequest';
import type { LoginKeyResponse } from '../models/LoginKeyResponse';
import type { SignupRequest } from '../models/SignupRequest';
import type { SignupResponse } from '../models/SignupResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AuthBootstrapService {
    /**
     * Bootstrap Key
     * Exchange a bootstrap token for an nk_ API key (one-time use).
     *
     * The returned api_key is shown only once — store it securely.
     * @param requestBody
     * @returns BootstrapKeyResponse Successful Response
     * @throws ApiError
     */
    static bootstrapKeyV2AuthBootstrapKeyPost(requestBody: BootstrapKeyRequest): CancelablePromise<BootstrapKeyResponse>;
    /**
     * Login Key
     * Authenticate with email + password and receive a new nk_ API key.
     *
     * For returning users who already have an account but need a new key
     * (e.g. an AI agent setting up in a new environment).
     * @param requestBody
     * @returns LoginKeyResponse Successful Response
     * @throws ApiError
     */
    static loginKeyV2AuthLoginKeyPost(requestBody: LoginKeyRequest): CancelablePromise<LoginKeyResponse>;
    /**
     * Signup
     * Create a new account and receive a bootstrap token.
     *
     * The bootstrap token can be exchanged exactly once via POST /v2/auth/bootstrap-key
     * to obtain an nk_ API key.
     * @param requestBody
     * @returns SignupResponse Successful Response
     * @throws ApiError
     */
    static signupV2AuthSignupPost(requestBody: SignupRequest): CancelablePromise<SignupResponse>;
}
