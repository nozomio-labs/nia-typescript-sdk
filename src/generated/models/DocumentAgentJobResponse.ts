/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

