import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Oracle Research
     * Run Oracle research and return complete result (non-streaming).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static oracleResearchV2OraclePost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oracle',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get 1M Usage
     * Get daily usage for 1M context window models.
     * @returns DailyUsage1MResponse Successful Response
     * @throws ApiError
     */
    static get1MUsageV2Oracle1MUsageGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracle/1m-usage',
        });
    }
    /**
     * Create Oracle Job
     * Create a new Oracle research job.
     *
     * Returns immediately with job_id and session_id.
     * Use /oracle/jobs/{job_id}/stream to receive real-time updates.
     *
     * Features:
     * - Per-user concurrency limit: max 3 concurrent Oracle jobs
     * - Job queuing: additional jobs wait in queue
     * - 30-minute timeout per job
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static createOracleJobV2OracleJobsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oracle/jobs',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Oracle Jobs
     * List Oracle research jobs for the authenticated user.
     *
     * Returns jobs ordered by creation time (newest first).
     * @param status Filter by status: queued, running, completed, failed
     * @param limit
     * @param skip
     * @returns any Successful Response
     * @throws ApiError
     */
    static listOracleJobsV2OracleJobsGet(status, limit = 20, skip) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracle/jobs',
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
     * Get Oracle Job
     * Get the status and details of an Oracle research job.
     *
     * Returns full job details including result if completed.
     * Includes fallback to check Hatchet state if job appears stuck in running state.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getOracleJobV2OracleJobsJobIdGet(jobId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracle/jobs/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Oracle Job
     * Cancel a running or queued Oracle research job.
     *
     * Note: Cancellation is best-effort. The job may complete
     * before cancellation takes effect.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static cancelOracleJobV2OracleJobsJobIdDelete(jobId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/oracle/jobs/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Stream Oracle Job
     * Stream real-time updates from an Oracle research job.
     *
     * Uses Hatchet's native streaming - no Redis required.
     * Reconnectable: can reconnect to a running job's stream at any time.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static streamOracleJobV2OracleJobsJobIdStreamGet(jobId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracle/jobs/{job_id}/stream',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Oracle Sessions
     * List Oracle research sessions for the authenticated API key.
     *
     * This is the new primary endpoint.
     * The old /oracle/history endpoint is deprecated but still operational.
     * @param limit
     * @param skip
     * @returns any Successful Response
     * @throws ApiError
     */
    static listOracleSessionsV2OracleSessionsGet(limit = 20, skip) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracle/sessions',
            query: {
                'limit': limit,
                'skip': skip,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Oracle Session Detail
     * Retrieve the full details of a single Oracle research session.
     *
     * This is the new primary endpoint.
     * The old /oracle/history/{session_id} endpoint is deprecated but still operational.
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getOracleSessionDetailV2OracleSessionsSessionIdGet(sessionId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracle/sessions/{session_id}',
            path: {
                'session_id': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Oracle Session
     * Delete an Oracle research session and its associated chat messages.
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteOracleSessionV2OracleSessionsSessionIdDelete(sessionId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/oracle/sessions/{session_id}',
            path: {
                'session_id': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Stream Oracle Session Chat
     * Stream a follow-up chat response for an Oracle research session.
     *
     * The response is generated as grounded Q&A based on:
     * - The original research report
     * - Citations and sources discovered during research
     * - Previous chat messages in the session
     *
     * This is a lightweight chat mode (not a full Oracle research run).
     * @param sessionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static streamOracleSessionChatV2OracleSessionsSessionIdChatStreamPost(sessionId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oracle/sessions/{session_id}/chat/stream',
            path: {
                'session_id': sessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Oracle Session Messages
     * Get chat messages for an Oracle research session.
     *
     * Returns the conversation history including the original query/report
     * and any follow-up messages.
     * @param sessionId
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    static getOracleSessionMessagesV2OracleSessionsSessionIdMessagesGet(sessionId, limit = 100) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracle/sessions/{session_id}/messages',
            path: {
                'session_id': sessionId,
            },
            query: {
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
