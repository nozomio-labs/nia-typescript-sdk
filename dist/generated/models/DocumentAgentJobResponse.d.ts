/**
 * Returned by POST /document/agent/jobs.
 */
export type DocumentAgentJobResponse = {
    /**
     * Workflow run id — pass to GET/stream/cancel endpoints
     */
    job_id: string;
    /**
     * Initial status — usually 'queued'
     */
    status: string;
    created_at: string;
    message: string;
};
