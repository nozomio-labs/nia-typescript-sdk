import type { BootstrapKeyRequest } from '../models/BootstrapKeyRequest';
import type { BootstrapKeyResponse } from '../models/BootstrapKeyResponse';
import type { LoginKeyRequest } from '../models/LoginKeyRequest';
import type { LoginKeyResponse } from '../models/LoginKeyResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { LoginVerifyRequest } from '../models/LoginVerifyRequest';
import type { LoginVerifyResponse } from '../models/LoginVerifyResponse';
import type { ResendCodeResponse } from '../models/ResendCodeResponse';
import type { SignupRequest } from '../models/SignupRequest';
import type { SignupResponse } from '../models/SignupResponse';
import type { VerifyRequest } from '../models/VerifyRequest';
import type { VerifyResponse } from '../models/VerifyResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AuthBootstrapService {
    /**
     * @deprecated
     * Bootstrap Key
     * **Deprecated** — Use POST /v2/auth/signup (returns key directly) + POST /v2/auth/verify instead.
     *
     * Exchange a bootstrap token for an nk_ API key (one-time use).
     * @param requestBody
     * @returns BootstrapKeyResponse Successful Response
     * @throws ApiError
     */
    static bootstrapKeyV2AuthBootstrapKeyPost(requestBody: BootstrapKeyRequest): CancelablePromise<BootstrapKeyResponse>;
    /**
     * Login
     * Request a verification code for passwordless login.
     *
     * A 6-digit code is sent to the provided email. Exchange it via
     * POST /v2/auth/login/verify to receive a new API key.
     * @param requestBody
     * @returns LoginResponse Successful Response
     * @throws ApiError
     */
    static loginV2AuthLoginPost(requestBody: LoginRequest): CancelablePromise<LoginResponse>;
    /**
     * @deprecated
     * Login Key
     * **Deprecated** — Use POST /v2/auth/login + POST /v2/auth/login/verify instead.
     *
     * Authenticate with email + password and receive a new nk_ API key.
     * @param requestBody
     * @returns LoginKeyResponse Successful Response
     * @throws ApiError
     */
    static loginKeyV2AuthLoginKeyPost(requestBody: LoginKeyRequest): CancelablePromise<LoginKeyResponse>;
    /**
     * Login Verify
     * Verify login code and receive a new full-access API key.
     * @param requestBody
     * @returns LoginVerifyResponse Successful Response
     * @throws ApiError
     */
    static loginVerifyV2AuthLoginVerifyPost(requestBody: LoginVerifyRequest): CancelablePromise<LoginVerifyResponse>;
    /**
     * Resend Code
     * Resend the verification code for an unverified API key.
     *
     * Requires the read-only API key in the Authorization header.
     * @returns ResendCodeResponse Successful Response
     * @throws ApiError
     */
    static resendCodeV2AuthResendCodePost(): CancelablePromise<ResendCodeResponse>;
    /**
     * Signup
     * Create a new account and receive a read-only API key.
     *
     * A 6-digit verification code is sent to the provided email. Call
     * POST /v2/auth/verify with the code (and this key in the Authorization
     * header) to upgrade to full access.
     * @param requestBody
     * @returns SignupResponse Successful Response
     * @throws ApiError
     */
    static signupV2AuthSignupPost(requestBody: SignupRequest): CancelablePromise<SignupResponse>;
    /**
     * Verify
     * Verify your account using the 6-digit code sent to your email.
     *
     * On success, the API key used in the Authorization header is upgraded
     * from read-only to full access.
     * @param requestBody
     * @returns VerifyResponse Successful Response
     * @throws ApiError
     */
    static verifyV2AuthVerifyPost(requestBody: VerifyRequest): CancelablePromise<VerifyResponse>;
}
