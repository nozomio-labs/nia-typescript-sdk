/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SourceInteractionRequest = {
    session_id?: (string | null);
    message_id?: (string | null);
    chunk_id: string;
    content_hash?: (string | null);
    retrieval_log_id?: (string | null);
    action: 'expanded' | 'copied' | 'navigated' | 'collapsed' | 'dwelled';
    position_shown?: (number | null);
    dwell_time_ms?: (number | null);
};

