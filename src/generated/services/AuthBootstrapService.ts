/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BootstrapKeyRequest } from '../models/BootstrapKeyRequest';
import type { BootstrapKeyResponse } from '../models/BootstrapKeyResponse';
import type { LoginKeyRequest } from '../models/LoginKeyRequest';
import type { LoginKeyResponse } from '../models/LoginKeyResponse';
import type { SignupRequest } from '../models/SignupRequest';
import type { SignupResponse } from '../models/SignupResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthBootstrapService {
    /**
     * Bootstrap Key
     * Exchange a bootstrap token for an nk_ API key (one-time use).
     *
     * The returned api_key is shown only once — store it securely.
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
     * Login Key
     * Authenticate with email + password and receive a new nk_ API key.
     *
     * For returning users who already have an account but need a new key
     * (e.g. an AI agent setting up in a new environment).
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
     * Signup
     * Create a new account and receive a bootstrap token.
     *
     * The bootstrap token can be exchanged exactly once via POST /v2/auth/bootstrap-key
     * to obtain an nk_ API key.
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
}
