/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerFeedbackRequest } from '../models/AnswerFeedbackRequest';
import type { SourceFeedbackRequest } from '../models/SourceFeedbackRequest';
import type { SourceInteractionRequest } from '../models/SourceInteractionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FeedbackService {
    /**
     * Submit Answer Feedback
     * Explicit thumbs up/down on an assistant answer.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static submitAnswerFeedbackV2FeedbackAnswerPost(
        requestBody: AnswerFeedbackRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/feedback/answer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Source Interaction
     * Implicit interaction events (copy, expand, dwell, click-through).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static submitSourceInteractionV2FeedbackInteractionPost(
        requestBody: SourceInteractionRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/feedback/interaction',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Source Feedback
     * Per-source helpful/irrelevant/partially_relevant feedback.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static submitSourceFeedbackV2FeedbackSourcePost(
        requestBody: SourceFeedbackRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/feedback/source',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
