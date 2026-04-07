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
