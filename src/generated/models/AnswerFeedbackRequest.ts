/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AnswerFeedbackRequest = {
    session_id?: (string | null);
    message_id?: (string | null);
    signal: 'thumbs_up' | 'thumbs_down';
    retrieval_log_id?: (string | null);
    comment?: (string | null);
};

