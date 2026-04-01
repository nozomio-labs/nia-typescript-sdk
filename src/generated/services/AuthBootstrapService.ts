/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthBootstrapService {
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
    public static bootstrapKeyV2AuthBootstrapKeyPost(
        requestBody: BootstrapKeyRequest,
    ): CancelablePromise<BootstrapKeyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/bootstrap-key',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    public static loginV2AuthLoginPost(
        requestBody: LoginRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    public static loginKeyV2AuthLoginKeyPost(
        requestBody: LoginKeyRequest,
    ): CancelablePromise<LoginKeyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login-key',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Login Verify
     * Verify login code and receive a new full-access API key.
     * @param requestBody
     * @returns LoginVerifyResponse Successful Response
     * @throws ApiError
     */
    public static loginVerifyV2AuthLoginVerifyPost(
        requestBody: LoginVerifyRequest,
    ): CancelablePromise<LoginVerifyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Resend Code
     * Resend the verification code for an unverified API key.
     *
     * Requires the read-only API key in the Authorization header.
     * @returns ResendCodeResponse Successful Response
     * @throws ApiError
     */
    public static resendCodeV2AuthResendCodePost(): CancelablePromise<ResendCodeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/resend-code',
        });
    }
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
    public static signupV2AuthSignupPost(
        requestBody: SignupRequest,
    ): CancelablePromise<SignupResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    public static verifyV2AuthVerifyPost(
        requestBody: VerifyRequest,
    ): CancelablePromise<VerifyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
