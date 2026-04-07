import type { AnswerFeedbackRequest } from '../models/AnswerFeedbackRequest';
import type { SourceFeedbackRequest } from '../models/SourceFeedbackRequest';
import type { SourceInteractionRequest } from '../models/SourceInteractionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FeedbackService {
    /**
     * Submit Answer Feedback
     * Explicit thumbs up/down on an assistant answer.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static submitAnswerFeedbackV2FeedbackAnswerPost(requestBody: AnswerFeedbackRequest): CancelablePromise<any>;
    /**
     * Submit Source Interaction
     * Implicit interaction events (copy, expand, dwell, click-through).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static submitSourceInteractionV2FeedbackInteractionPost(requestBody: SourceInteractionRequest): CancelablePromise<any>;
    /**
     * Submit Source Feedback
     * Per-source helpful/irrelevant/partially_relevant feedback.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static submitSourceFeedbackV2FeedbackSourcePost(requestBody: SourceFeedbackRequest): CancelablePromise<any>;
}
