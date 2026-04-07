export type SourceFeedbackRequest = {
    session_id?: (string | null);
    message_id?: (string | null);
    chunk_id: string;
    content_hash?: (string | null);
    signal: 'helpful' | 'irrelevant' | 'partially_relevant';
    retrieval_log_id?: (string | null);
};
