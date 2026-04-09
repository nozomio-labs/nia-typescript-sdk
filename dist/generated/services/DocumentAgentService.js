import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocumentAgentService {
    /**
     * Query document(s) with an AI agent (synchronous)
     * Run the full document agent against one or more indexed PDFs or documents. The agent uses tools (search, read sections, read pages) to research the document(s) and produce a comprehensive answer with citations. Supports optional structured output via json_schema.
     *
     * **This endpoint is synchronous and holds the HTTP connection for the entire agent run (typically 1-10 minutes).** For production workloads or anything that may run longer, use POST /document/agent/jobs instead — it returns a job_id immediately and lets you poll or stream results without an HTTP connection limit.
     * @param requestBody
     * @returns DocumentQueryResponse Successful Response
     * @throws ApiError
     */
    static documentQueryV2DocumentAgentPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/document/agent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Enqueue an async document agent job
     * Create a long-running document agent job. Returns immediately with a `job_id` — use GET /document/agent/jobs/{job_id} to poll for the result or GET /document/agent/jobs/{job_id}/stream for live SSE updates.
     *
     * Recommended for production workloads, batch evaluation pipelines, or anything that may run longer than ~10 minutes. The job runs on a background worker pool with 30-minute hard timeout, per-user concurrency caps, and automatic refunds on failure.
     * @param requestBody
     * @returns DocumentAgentJobResponse Successful Response
     * @throws ApiError
     */
    static createDocumentAgentJobV2DocumentAgentJobsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/document/agent/jobs',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List async document agent jobs for the authenticated user
     * @param status Filter by status: queued, running, completed, failed, cancelled
     * @param limit
     * @param skip
     * @returns any Successful Response
     * @throws ApiError
     */
    static listDocumentAgentJobsV2DocumentAgentJobsGet(status, limit = 20, skip) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/document/agent/jobs',
            query: {
                'status': status,
                'limit': limit,
                'skip': skip,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get the status / result of a document agent job
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getDocumentAgentJobV2DocumentAgentJobsJobIdGet(jobId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/document/agent/jobs/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel a running document agent job
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static cancelDocumentAgentJobV2DocumentAgentJobsJobIdDelete(jobId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/document/agent/jobs/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Stream live updates from a document agent job (SSE)
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static streamDocumentAgentJobV2DocumentAgentJobsJobIdStreamGet(jobId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/document/agent/jobs/{job_id}/stream',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
