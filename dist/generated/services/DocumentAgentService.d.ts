import type { DocumentAgentJobResponse } from '../models/DocumentAgentJobResponse';
import type { DocumentQueryRequest } from '../models/DocumentQueryRequest';
import type { DocumentQueryResponse } from '../models/DocumentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DocumentAgentService {
    /**
     * Query document(s) with an AI agent (synchronous)
     * Run the full document agent against one or more indexed PDFs or documents. The agent uses tools (search, read sections, read pages) to research the document(s) and produce a comprehensive answer with citations. Supports optional structured output via json_schema.
     *
     * **This endpoint is synchronous and holds the HTTP connection for the entire agent run (typically 1-10 minutes).** For production workloads or anything that may run longer, use POST /document/agent/jobs instead — it returns a job_id immediately and lets you poll or stream results without an HTTP connection limit.
     * @param requestBody
     * @returns DocumentQueryResponse Successful Response
     * @throws ApiError
     */
    static documentQueryV2DocumentAgentPost(requestBody: DocumentQueryRequest): CancelablePromise<DocumentQueryResponse>;
    /**
     * Enqueue an async document agent job
     * Create a long-running document agent job. Returns immediately with a `job_id` — use GET /document/agent/jobs/{job_id} to poll for the result or GET /document/agent/jobs/{job_id}/stream for live SSE updates.
     *
     * Recommended for production workloads, batch evaluation pipelines, or anything that may run longer than ~10 minutes. The job runs on a background worker pool with 30-minute hard timeout, per-user concurrency caps, and automatic refunds on failure.
     * @param requestBody
     * @returns DocumentAgentJobResponse Successful Response
     * @throws ApiError
     */
    static createDocumentAgentJobV2DocumentAgentJobsPost(requestBody: DocumentQueryRequest): CancelablePromise<DocumentAgentJobResponse>;
    /**
     * List async document agent jobs for the authenticated user
     * @param status Filter by status: queued, running, completed, failed, cancelled
     * @param limit
     * @param skip
     * @returns any Successful Response
     * @throws ApiError
     */
    static listDocumentAgentJobsV2DocumentAgentJobsGet(status?: (string | null), limit?: number, skip?: number): CancelablePromise<any>;
    /**
     * Get the status / result of a document agent job
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getDocumentAgentJobV2DocumentAgentJobsJobIdGet(jobId: string): CancelablePromise<any>;
    /**
     * Cancel a running document agent job
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static cancelDocumentAgentJobV2DocumentAgentJobsJobIdDelete(jobId: string): CancelablePromise<any>;
    /**
     * Stream live updates from a document agent job (SSE)
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static streamDocumentAgentJobV2DocumentAgentJobsJobIdStreamGet(jobId: string): CancelablePromise<any>;
}
