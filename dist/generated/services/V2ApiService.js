import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiService {
    /**
     * Export Account
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    static exportAccountV2AccountExportPost(authorization) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account/export',
            headers: {
                'Authorization': authorization,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Import Account
     * @param requestBody
     * @param authorization
     * @returns any Successful Response
     * @throws ApiError
     */
    static importAccountV2AccountImportPost(requestBody, authorization) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account/import',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Context-aware code advisor
     * Analyze codebase context against Nia's indexed documentation to get tailored recommendations.
     * @param requestBody
     * @returns AdvisorResponse Successful Response
     * @throws ApiError
     */
    static analyzeCodebaseV2AdvisorPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/advisor',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Bootstrap Key
     * **Deprecated** — Use POST /v2/auth/signup (returns key directly) + POST /v2/auth/verify instead.
     *
     * Exchange a bootstrap token for an nk_ API key (one-time use).
     * @param requestBody
     * @returns BootstrapKeyResponse Successful Response
     * @throws ApiError
     */
    static bootstrapKeyV2AuthBootstrapKeyPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/bootstrap-key',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Login
     * Request a verification code for passwordless login.
     *
     * A 6-digit code is sent to the provided email. Exchange it via
     * POST /v2/auth/login/verify to receive a new API key.
     * @param requestBody
     * @returns LoginResponse Successful Response
     * @throws ApiError
     */
    static loginV2AuthLoginPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * @deprecated
     * Login Key
     * **Deprecated** — Use POST /v2/auth/login + POST /v2/auth/login/verify instead.
     *
     * Authenticate with email + password and receive a new nk_ API key.
     * @param requestBody
     * @returns LoginKeyResponse Successful Response
     * @throws ApiError
     */
    static loginKeyV2AuthLoginKeyPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login-key',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Login Verify
     * Verify login code and receive a new full-access API key.
     * @param requestBody
     * @returns LoginVerifyResponse Successful Response
     * @throws ApiError
     */
    static loginVerifyV2AuthLoginVerifyPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Resend Code
     * Resend the verification code for an unverified API key.
     *
     * Requires the read-only API key in the Authorization header.
     * @returns ResendCodeResponse Successful Response
     * @throws ApiError
     */
    static resendCodeV2AuthResendCodePost() {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/resend-code',
        });
    }
    /**
     * Signup
     * Create a new account and receive a read-only API key.
     *
     * A 6-digit verification code is sent to the provided email. Call
     * POST /v2/auth/verify with the code (and this key in the Authorization
     * header) to upgrade to full access.
     * @param requestBody
     * @returns SignupResponse Successful Response
     * @throws ApiError
     */
    static signupV2AuthSignupPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Verify
     * Verify your account using the 6-digit code sent to your email.
     *
     * On success, the API key used in the Authorization header is upgraded
     * from read-only to full access.
     * @param requestBody
     * @returns VerifyResponse Successful Response
     * @throws ApiError
     */
    static verifyV2AuthVerifyPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Bulk delete resources
     * Delete multiple resources in a single request. Supports repositories, documentation, research papers, contexts, and local folders.
     * @param requestBody
     * @returns BulkDeleteResponse Successful Response
     * @throws ApiError
     */
    static bulkDeleteResourcesV2BulkDeletePost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bulk-delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List categories
     * List categories for the authenticated user/organization.
     * @param limit Number of categories to return
     * @param offset Number of categories to skip
     * @returns CategoryListCompatResponse Successful Response
     * @throws ApiError
     */
    static listCategoriesV2CategoriesGet(limit = 50, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create category
     * Create a new category for organizing data sources.
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    static createCategoryV2CategoriesPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/categories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update category
     * Update an existing category.
     * @param categoryId
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    static updateCategoryV2CategoriesCategoryIdPatch(categoryId, requestBody) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/categories/{category_id}',
            path: {
                'category_id': categoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete category
     * Delete a category. Data sources with this category will become uncategorized.
     * @param categoryId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteCategoryV2CategoriesCategoryIdDelete(categoryId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/categories/{category_id}',
            path: {
                'category_id': categoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Available Connectors
     * List all available connector types with their metadata.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listAvailableConnectorsV2ConnectorsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors',
        });
    }
    /**
     * List Installations
     * List all connector installations for the current user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listInstallationsV2ConnectorsInstallationsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors/installations',
        });
    }
    /**
     * Delete Installation
     * Disconnect a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteInstallationV2ConnectorsInstallationsInstallationIdDelete(installationId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/connectors/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Index Installation
     * Trigger indexing for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static indexInstallationV2ConnectorsInstallationsInstallationIdIndexPost(installationId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connectors/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Schedule
     * Update sync schedule for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateScheduleV2ConnectorsInstallationsInstallationIdSchedulePatch(installationId) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/connectors/installations/{installation_id}/schedule',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Installation Status
     * Get sync status and health for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getInstallationStatusV2ConnectorsInstallationsInstallationIdStatusGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Install Connector
     * Install a connector — either store API key or initiate OAuth flow.
     * @param connectorType
     * @returns any Successful Response
     * @throws ApiError
     */
    static installConnectorV2ConnectorsConnectorTypeInstallPost(connectorType) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connectors/{connector_type}/install',
            path: {
                'connector_type': connectorType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Oauth Callback
     * Handle OAuth callback — exchange code, create installation, redirect to frontend.
     * @param connectorType
     * @param code
     * @param state
     * @returns any Successful Response
     * @throws ApiError
     */
    static oauthCallbackV2ConnectorsConnectorTypeOauthCallbackGet(connectorType, code, state) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connectors/{connector_type}/oauth/callback',
            path: {
                'connector_type': connectorType,
            },
            query: {
                'code': code,
                'state': state,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Save context
     * Save conversation context for cross-agent sharing. Indexed in vector store for semantic search.
     * @param requestBody
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    static saveContextV2V2ContextsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contexts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List contexts
     * List conversation contexts with pagination. Filter by tags, agent source, or memory type.
     * @param limit Number of contexts to return
     * @param offset Number of contexts to skip
     * @param tags Comma-separated tags to filter by
     * @param agentSource Filter by agent source
     * @param memoryType Filter by memory type: scratchpad, episodic, fact, procedural
     * @returns ContextListCompatResponse Successful Response
     * @throws ApiError
     */
    static listContextsV2V2ContextsGet(limit = 20, offset, tags, agentSource, memoryType) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts',
            query: {
                'limit': limit,
                'offset': offset,
                'tags': tags,
                'agent_source': agentSource,
                'memory_type': memoryType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Text search contexts
     * Search contexts by content, title, summary, or tags using MongoDB text search.
     * @param q Search query
     * @param limit Number of contexts to return
     * @param tags Comma-separated tags to filter by
     * @param agentSource Filter by agent source
     * @returns ContextSearchResponse Successful Response
     * @throws ApiError
     */
    static searchContextsV2V2ContextsSearchGet(q, limit = 20, tags, agentSource) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts/search',
            query: {
                'q': q,
                'limit': limit,
                'tags': tags,
                'agent_source': agentSource,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Semantic search contexts
     * Vector + BM25 hybrid search over contexts. Returns relevance scores and highlights.
     * @param q Search query
     * @param limit Number of contexts to return
     * @param includeHighlights Include match highlights
     * @param workspaceFilter Filter by specific workspace name
     * @returns ContextSemanticSearchResponse Successful Response
     * @throws ApiError
     */
    static semanticSearchContextsV2V2ContextsSemanticSearchGet(q, limit = 20, includeHighlights = true, workspaceFilter) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts/semantic-search',
            query: {
                'q': q,
                'limit': limit,
                'include_highlights': includeHighlights,
                'workspace_filter': workspaceFilter,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get context
     * Retrieve a specific context by ID.
     * @param contextId
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    static getContextV2V2ContextsContextIdGet(contextId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contexts/{context_id}',
            path: {
                'context_id': contextId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update context
     * Update an existing context. Re-indexes in vector store if content changes.
     * @param contextId
     * @param requestBody
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    static updateContextV2V2ContextsContextIdPut(contextId, requestBody) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/contexts/{context_id}',
            path: {
                'context_id': contextId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete context
     * Soft delete a context (marks inactive).
     * @param contextId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteContextV2V2ContextsContextIdDelete(contextId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/contexts/{context_id}',
            path: {
                'context_id': contextId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Analyze package manifest
     * Parse a package manifest and return dependency information with documentation URL mappings. This is a preview - no subscriptions are created.
     * @param requestBody
     * @returns AnalyzeResponse Successful Response
     * @throws ApiError
     */
    static analyzeDependenciesV2DependenciesAnalyzePost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dependencies/analyze',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Subscribe to documentation for manifest dependencies
     * Parse a package manifest and automatically subscribe to documentation for all dependencies.
     * @param requestBody
     * @returns routes__v2__dependencies__SubscribeResponse Successful Response
     * @throws ApiError
     */
    static subscribeToDependenciesV2DependenciesSubscribePost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dependencies/subscribe',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload manifest file and subscribe to dependencies
     * Upload a package manifest file and subscribe to documentation for all dependencies.
     * @param formData
     * @returns routes__v2__dependencies__SubscribeResponse Successful Response
     * @throws ApiError
     */
    static uploadAndSubscribeV2DependenciesUploadPost(formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dependencies/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    /**
     * Start Extraction
     * @param requestBody
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    static startExtractionV2ExtractPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Start Detect Extraction
     * @param requestBody
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    static startDetectExtractionV2ExtractDetectPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract/detect',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Detect Extraction
     * @param extractionId
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    static getDetectExtractionV2ExtractDetectExtractionIdGet(extractionId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/detect/{extraction_id}',
            path: {
                'extraction_id': extractionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Detect Page Image
     * @param extractionId
     * @param pageNumber
     * @returns any Successful Response
     * @throws ApiError
     */
    static getDetectPageImageV2ExtractDetectExtractionIdPagePageNumberImageGet(extractionId, pageNumber) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/detect/{extraction_id}/page/{page_number}/image',
            path: {
                'extraction_id': extractionId,
                'page_number': pageNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Start Engineering Extraction
     * @param requestBody
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    static startEngineeringExtractionV2ExtractEngineeringPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract/engineering',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Engineering Extraction
     * @param extractionId
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    static getEngineeringExtractionV2ExtractEngineeringExtractionIdGet(extractionId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/engineering/{extraction_id}',
            path: {
                'extraction_id': extractionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Query Engineering Extraction
     * @param extractionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static queryEngineeringExtractionV2ExtractEngineeringExtractionIdQueryPost(extractionId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract/engineering/{extraction_id}/query',
            path: {
                'extraction_id': extractionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Extraction
     * @param extractionId
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    static getExtractionV2ExtractExtractionIdGet(extractionId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/{extraction_id}',
            path: {
                'extraction_id': extractionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Extractions
     * @param type Filter by type: table or engineering
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static listExtractionsV2ExtractionsGet(type, limit = 30, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extractions',
            query: {
                'type': type,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Answer Feedback
     * Explicit thumbs up/down on an assistant answer.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static submitAnswerFeedbackV2FeedbackAnswerPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/feedback/answer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Source Interaction
     * Implicit interaction events (copy, expand, dwell, click-through).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static submitSourceInteractionV2FeedbackInteractionPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/feedback/interaction',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Source Feedback
     * Per-source helpful/irrelevant/partially_relevant feedback.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static submitSourceFeedbackV2FeedbackSourcePost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/feedback/source',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Write
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteV2FsSourceIdFilesPut(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fs/{source_id}/files',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Delete
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsDeleteV2FsSourceIdFilesDelete(sourceId, path) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fs/{source_id}/files',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Write Batch
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteBatchV2FsSourceIdFilesBatchPut(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fs/{source_id}/files/batch',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Find
     * @param sourceId
     * @param pattern Glob pattern (e.g. ***.ts)
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsFindV2FsSourceIdFindGet(sourceId, pattern) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/find',
            path: {
                'source_id': sourceId,
            },
            query: {
                'pattern': pattern,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Grep
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsGrepV2FsSourceIdGrepPost(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs/{source_id}/grep',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Info
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsInfoV2FsSourceIdInfoGet(sourceId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/info',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Ls
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsLsV2FsSourceIdLsGet(sourceId, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/ls',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Mkdir
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMkdirV2FsSourceIdMkdirPost(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs/{source_id}/mkdir',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Mv
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMvV2FsSourceIdMvPost(sourceId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fs/{source_id}/mv',
            path: {
                'source_id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Read
     * @param sourceId
     * @param path File path to read
     * @param lineStart
     * @param lineEnd
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsReadV2FsSourceIdReadGet(sourceId, path, lineStart, lineEnd) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/read',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
                'line_start': lineStart,
                'line_end': lineEnd,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fs Tree
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsTreeV2FsSourceIdTreeGet(sourceId, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fs/{source_id}/tree',
            path: {
                'source_id': sourceId,
            },
            query: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Glob
     * Find files matching a glob pattern in a GitHub repository.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static githubGlobV2GithubGlobPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/glob',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Read
     * Read a file from a GitHub repository with optional line range.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static githubReadV2GithubReadPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/read',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Code Search
     * Search code in a GitHub repository using GitHub's Code Search API.
     *
     * Rate limited to 10 requests/minute by GitHub. Requires authentication
     * for private repos (via user's GitHub App installation).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static githubCodeSearchV2GithubSearchPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Tracer Job
     * Create a Tracer search job.
     *
     * Tracer is an autonomous agent that searches GitHub repositories
     * to answer your question. Returns immediately with a job_id and session_id.
     * Use /github/tracer/{job_id}/stream to receive real-time updates.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static createTracerJobV2GithubTracerPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/github/tracer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Tracer Jobs
     * List Tracer jobs for the authenticated user.
     * @param status Filter by status
     * @param limit Max results
     * @param skip Offset for pagination
     * @returns any Successful Response
     * @throws ApiError
     */
    static listTracerJobsV2GithubTracerGet(status, limit = 50, skip) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tracer',
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
     * Delete Tracer Job
     * Delete a Tracer job by session_id or workflow_run_id.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteTracerJobV2GithubTracerJobIdDelete(jobId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/github/tracer/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Tracer Job
     * Get the status and result of a Tracer search job.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getTracerJobV2GithubTracerJobIdGet(jobId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tracer/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Stream Tracer Job
     * Stream real-time updates from a Tracer search job.
     *
     * Uses Hatchet's native streaming with MongoDB fallback polling.
     * Reconnectable: can reconnect to a running job's stream at any time.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static streamTracerJobV2GithubTracerJobIdStreamGet(jobId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tracer/{job_id}/stream',
            path: {
                'job_id': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Github Tree
     * Get the file tree of a GitHub repository or subdirectory.
     * @param owner
     * @param repo
     * @param ref Branch, tag, or commit SHA
     * @param path Subdirectory path
     * @returns any Successful Response
     * @throws ApiError
     */
    static githubTreeV2GithubTreeOwnerRepoGet(owner, repo, ref = 'HEAD', path) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/github/tree/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'ref': ref,
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Install Url
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2GoogleDriveInstallPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/install',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Handle Oauth Callback
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2GoogleDriveInstallCallbackPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/install/callback',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Google Drive Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listGoogleDriveInstallationsV2GoogleDriveInstallationsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations',
        });
    }
    /**
     * Get Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdDelete(installationId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/google-drive/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Browse Google Drive Items
     * @param installationId
     * @param folderId Optional Drive folder ID to browse
     * @param q Optional Drive item name search
     * @param pageToken Pagination token from the previous response
     * @param pageSize Maximum Drive items to return
     * @returns any Successful Response
     * @throws ApiError
     */
    static browseGoogleDriveItemsV2GoogleDriveInstallationsInstallationIdBrowseGet(installationId, folderId, q, pageToken, pageSize = 100) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}/browse',
            path: {
                'installation_id': installationId,
            },
            query: {
                'folder_id': folderId,
                'q': q,
                'page_token': pageToken,
                'page_size': pageSize,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Google Drive Index
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveIndexV2GoogleDriveInstallationsInstallationIdIndexPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Google Drive Selection
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}/selection',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Google Drive Selection
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/installations/{installation_id}/selection',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Google Drive Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveIndexStatusV2GoogleDriveInstallationsInstallationIdStatusGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/google-drive/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Google Drive Sync
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveSyncV2GoogleDriveInstallationsInstallationIdSyncPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/google-drive/installations/{installation_id}/sync',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep package source
     * Regex search over public package source code (npm, PyPI, crates.io, Go modules).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchGrepV2V2PackagesGrepPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/grep',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read package file
     * Read specific lines from a package source file. Max 200 lines per request.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchReadFileV2V2PackagesReadPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/read',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Semantic package search
     * Hybrid semantic + keyword search over package source. 1-5 natural language queries.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchHybridV2V2PackagesSearchPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Unified search
     * Single search endpoint with a mode discriminator.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static unifiedSearchV2V2SearchPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Index Docs
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static indexDocsV2ShellDocsIndexPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/shell-docs/index',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Load
     * Combined status + dump in one request. Returns status info + files if indexed.
     * @param url Documentation URL
     * @param pathsOnly Return paths without content (for lazy loading)
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsLoadV2ShellDocsLoadGet(url, pathsOnly = false) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/load',
            query: {
                'url': url,
                'paths_only': pathsOnly,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Check Status
     * @param url Documentation URL
     * @returns any Successful Response
     * @throws ApiError
     */
    static checkStatusV2ShellDocsStatusGet(url) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/status',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Ingest Telemetry
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static ingestTelemetryV2ShellDocsTelemetryPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/shell-docs/telemetry',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Dump
     * @param namespace
     * @param pathsOnly
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsDumpV2ShellDocsNamespaceDumpGet(namespace, pathsOnly = false) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/dump',
            path: {
                'namespace': namespace,
            },
            query: {
                'paths_only': pathsOnly,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Find
     * @param namespace
     * @param pattern Glob pattern (e.g. ***.md)
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsFindV2ShellDocsNamespaceFindGet(namespace, pattern) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/find',
            path: {
                'namespace': namespace,
            },
            query: {
                'pattern': pattern,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Grep
     * @param namespace
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsGrepV2ShellDocsNamespaceGrepPost(namespace, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/shell-docs/{namespace}/grep',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Info
     * @param namespace
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsInfoV2ShellDocsNamespaceInfoGet(namespace) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/info',
            path: {
                'namespace': namespace,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Ls
     * @param namespace
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsLsV2ShellDocsNamespaceLsGet(namespace, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/ls',
            path: {
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Read
     * @param namespace
     * @param path File path to read
     * @param lineStart
     * @param lineEnd
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsReadV2ShellDocsNamespaceReadGet(namespace, path, lineStart, lineEnd) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/read',
            path: {
                'namespace': namespace,
            },
            query: {
                'path': path,
                'line_start': lineStart,
                'line_end': lineEnd,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Shell Docs Tree
     * @param namespace
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static shellDocsTreeV2ShellDocsNamespaceTreeGet(namespace, path = '/') {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shell-docs/{namespace}/tree',
            path: {
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Install Url
     * Generate a Slack OAuth authorization URL.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2SlackInstallPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/install',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Handle Oauth Callback
     * Exchange an OAuth code for tokens and create the installation.
     *
     * Called by the frontend callback route after the user authorizes the Slack app.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2SlackInstallCallbackPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/install/callback',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Register External Token
     * Register an external Slack bot token (BYOT).
     *
     * For multi-tenant scenarios: your customers provide their Slack bot token
     * and you manage it through Nia's API.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static registerExternalTokenV2SlackInstallTokenPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/install/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Slack Installations
     * List all Slack workspace connections for the authenticated user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackInstallationsV2SlackInstallationsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations',
        });
    }
    /**
     * Get Slack Installation
     * Get details for a specific Slack installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackInstallationV2SlackInstallationsInstallationIdGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Slack Installation
     * Disconnect a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteSlackInstallationV2SlackInstallationsInstallationIdDelete(installationId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/slack/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Slack Channels
     * List available Slack channels from the workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackChannelsV2SlackInstallationsInstallationIdChannelsGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}/channels',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Configure Slack Channels
     * Configure which channels to index.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static configureSlackChannelsV2SlackInstallationsInstallationIdChannelsPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/installations/{installation_id}/channels',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep Slack Messages
     * BM25 keyword search over indexed Slack messages in TurboPuffer.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSlackMessagesV2SlackInstallationsInstallationIdGrepPost(installationId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/installations/{installation_id}/grep',
            path: {
                'installation_id': installationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger Slack Index
     * Trigger a full re-index of the Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerSlackIndexV2SlackInstallationsInstallationIdIndexPost(installationId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/slack/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Slack Messages
     * Read recent messages from a Slack channel (live from Slack API).
     * @param installationId
     * @param channel
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    static readSlackMessagesV2SlackInstallationsInstallationIdMessagesGet(installationId, channel, limit = 50) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}/messages',
            path: {
                'installation_id': installationId,
            },
            query: {
                'channel': channel,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Slack Index Status
     * Get the indexing status for a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackIndexStatusV2SlackInstallationsInstallationIdStatusGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/slack/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Sources
     * @param type Filter by source type
     * @param query Search by name or identifier
     * @param status Filter by status
     * @param categoryId Filter by category
     * @param limit
     * @param offset
     * @returns SourceListResponse Successful Response
     * @throws ApiError
     */
    static listSourcesV2SourcesGet(type, query, status, categoryId, limit = 20, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources',
            query: {
                'type': type,
                'query': query,
                'status': status,
                'category_id': categoryId,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Source
     * @param requestBody
     * @param organizationId Organization ID for usage tracking
     * @returns Source Successful Response
     * @throws ApiError
     */
    static createSourceV2SourcesPost(requestBody, organizationId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources',
            query: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get sources summary
     * Get counts and recent names for all source types. Designed for quick inventory checks.
     * @returns SourcesSummaryResponse Successful Response
     * @throws ApiError
     */
    static getSourcesSummaryV2SourcesSummaryGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources-summary',
        });
    }
    /**
     * Explore Global Sources
     * Browse the global catalog of publicly indexed sources.
     * @param search Search by URL or name
     * @param sourceType Filter by type: repository | documentation | research_paper | huggingface_dataset
     * @param status Filter by status
     * @param sort Sort: recently_indexed | recently_updated | most_tokens | most_snippets | most_subscribed | relevance
     * @param order Sort direction: asc | desc
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static exploreGlobalSourcesV2SourcesExploreGet(search = '', sourceType = '', status = 'indexed', sort = 'most_subscribed', order = 'desc', limit = 20, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/explore',
            query: {
                'search': search,
                'source_type': sourceType,
                'status': status,
                'sort': sort,
                'order': order,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Resolve Source
     * @param identifier Display name, URL, or slug
     * @param type Source type hint
     * @returns SourceResolveResponse Successful Response
     * @throws ApiError
     */
    static resolveSourceV2SourcesResolveGet(identifier, type) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/resolve',
            query: {
                'identifier': identifier,
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Subscribe to a global source
     * Subscribe to an existing globally indexed public source. Creates a local reference for instant access without re-indexing.
     * @param requestBody
     * @returns GlobalSourceSubscribeResponse Successful Response
     * @throws ApiError
     */
    static subscribeSourceV2SourcesSubscribePost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/subscribe',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get PDF upload URL
     * Generate a signed URL for direct PDF upload. Use the returned gcs_path in POST /v2/sources.
     * @param requestBody
     * @returns SourceUploadUrlResponse Successful Response
     * @throws ApiError
     */
    static createSourceUploadUrlV2SourcesUploadUrlPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/upload-url',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source
     * @param sourceId
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    static getSourceV2SourcesSourceIdGet(sourceId, type) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    static updateSourceV2SourcesSourceIdPatch(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Source
     * @param sourceId
     * @param type Source type hint
     * @returns SourceDeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteSourceV2SourcesSourceIdDelete(sourceId, type) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Source Annotations
     * @param sourceId
     * @param type Source type hint
     * @returns SourceAnnotation Successful Response
     * @throws ApiError
     */
    static listSourceAnnotationsV2SourcesSourceIdAnnotationsGet(sourceId, type) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/annotations',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Source Annotation
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static createSourceAnnotationV2SourcesSourceIdAnnotationsPost(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/{source_id}/annotations',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Source Annotation
     * @param sourceId
     * @param annotationId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static updateSourceAnnotationV2SourcesSourceIdAnnotationsAnnotationIdPatch(sourceId, annotationId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/{source_id}/annotations/{annotation_id}',
            path: {
                'source_id': sourceId,
                'annotation_id': annotationId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Source Annotation
     * @param sourceId
     * @param annotationId
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static deleteSourceAnnotationV2SourcesSourceIdAnnotationsAnnotationIdDelete(sourceId, annotationId, type) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/{source_id}/annotations/{annotation_id}',
            path: {
                'source_id': sourceId,
                'annotation_id': annotationId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source Classification
     * @param sourceId
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSourceClassificationV2SourcesSourceIdClassificationGet(sourceId, type) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/classification',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Source Classification
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateSourceClassificationV2SourcesSourceIdClassificationPatch(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/{source_id}/classification',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source Content
     * @param sourceId
     * @param type Source type hint
     * @param path Path or virtual path
     * @param url Direct URL (documentation)
     * @param branch Repository branch
     * @param page PDF page number
     * @param treeNodeId PDF tree node identifier
     * @param lineStart Starting line number
     * @param lineEnd Ending line number
     * @param maxLength Maximum content length
     * @returns SourceContentResponse Successful Response
     * @throws ApiError
     */
    static getSourceContentV2SourcesSourceIdContentGet(sourceId, type, path, url, branch, page, treeNodeId, lineStart, lineEnd, maxLength) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/content',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
                'path': path,
                'url': url,
                'branch': branch,
                'page': page,
                'tree_node_id': treeNodeId,
                'line_start': lineStart,
                'line_end': lineEnd,
                'max_length': maxLength,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source Curation
     * @param sourceId
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static getSourceCurationV2SourcesSourceIdCurationGet(sourceId, type) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/curation',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Source Curation
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static updateSourceCurationV2SourcesSourceIdCurationPut(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/{source_id}/curation',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSourceV2SourcesSourceIdGrepPost(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/{source_id}/grep',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Sync Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static syncSourceV2SourcesSourceIdSyncPost(sourceId, requestBody, type) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/{source_id}/sync',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Source Tree
     * @param sourceId
     * @param type Source type hint
     * @param branch Repository branch
     * @param maxDepth
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSourceTreeV2SourcesSourceIdTreeGet(sourceId, type, branch, maxDepth = 10) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/{source_id}/tree',
            path: {
                'source_id': sourceId,
            },
            query: {
                'type': type,
                'branch': branch,
                'max_depth': maxDepth,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get usage summary
     * Get usage counts and limits for current billing period (queries, indexing, oracle, etc.).
     * @returns UsageSummaryResponse Successful Response
     * @throws ApiError
     */
    static getUsageSummaryV2V2UsageGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usage',
        });
    }
    /**
     * Create Vault
     * Create a new vault.
     *
     * Body: {display_name: str, description?: str, source_ids?: [str], schema_md?: str}
     *
     * Bootstraps the vault namespace with schema.md/index.md/log.md/META.md.
     * Does NOT auto-trigger ingest — call POST /v2/vaults/{id}/run with
     * mode=ingest after creation if you want immediate ingestion.
     * @returns any Successful Response
     * @throws ApiError
     */
    static createVaultV2VaultsPost() {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults',
        });
    }
    /**
     * List Vaults
     * List vaults owned by the calling user / org.
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static listVaultsV2VaultsGet(limit = 100, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Available Sources
     * Return every source the user can add to a vault.
     *
     * Merges data_sources (excluding vaults), local_folders, and projects into a
     * single list with a unified shape so the frontend picker shows everything.
     * @param q Search filter on display_name / url
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static listAvailableSourcesV2VaultsAvailableSourcesGet(q, limit = 500, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/available-sources',
            query: {
                'q': q,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Vault
     * Get vault metadata and current workflow status.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getVaultV2VaultsVaultIdGet(vaultId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Vault
     * Delete a vault.
     *
     * Cleans up Postgres files AND TurboPuffer chunks. Order matters: drop
     * TurboPuffer first, then PG, then Mongo. If any step fails before the Mongo
     * delete, the vault row remains so the user can retry without losing
     * accounting state.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteVaultV2VaultsVaultIdDelete(vaultId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vaults/{vault_id}',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Vault
     * Update vault metadata (display_name, description, schema_md).
     *
     * When schema_md is updated, the new content is also written into the
     * vault namespace as `/schema.md` so the bash session sees it immediately.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static patchVaultV2VaultsVaultIdPatch(vaultId) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/vaults/{vault_id}',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Vault Agent
     * Stream an AI agent response that can search/read the vault.
     *
     * Returns an SSE stream of events (same shape as the document agent).
     * Charges one QUERY credit per call; refunds on failure.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static vaultAgentV2VaultsVaultIdAgentPost(vaultId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/agent',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Vault Workflow
     * Cancel an in-flight vault workflow run, if any.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static cancelVaultWorkflowV2VaultsVaultIdCancelPost(vaultId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/cancel',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Vault Graph
     * Return the wikilink graph as nodes + edges for visualization.
     *
     * Walks all concept/entity/note pages, parses [[wikilinks]], and builds a
     * force-directed-ready JSON structure. No LLM calls — pure file parsing.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static vaultGraphV2VaultsVaultIdGraphGet(vaultId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}/graph',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Load Vault
     * Bootstrap dump for the `nia vault open` bash session.
     *
     * Mirrors the shape of /shell-docs/load. Returns vault metadata and either
     * full file contents or just paths (for vaults > 1000 files).
     *
     * Up to 10000 files are returned (matches DIR_LISTING_LIMIT in fs_service.py).
     * @param vaultId
     * @param pathsOnly
     * @returns any Successful Response
     * @throws ApiError
     */
    static loadVaultV2VaultsVaultIdLoadGet(vaultId, pathsOnly = false) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}/load',
            path: {
                'vault_id': vaultId,
            },
            query: {
                'paths_only': pathsOnly,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Run Vault Workflow
     * Trigger a vault_workflow run. Body: {mode: ingest|sync|lint|refresh, source_ids?: [], model?: str, force?: bool}
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static runVaultWorkflowV2VaultsVaultIdRunPost(vaultId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/run',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Vault
     * Hybrid search scoped to this vault's namespace.
     *
     * Returns embedded vault pages as ranked results with citations. The vault
     * namespace was populated by the existing `fs_sync_workflow` mirroring every
     * write into TurboPuffer (see routes/v2/fs.py:294-313).
     *
     * Telemetry: emits both `store_api_activity` (for the user-facing activity
     * feed) and `store_retrieval_log` (for the training-data pipeline) so vault
     * searches show up alongside every other retrieval call. Two retrieval logs
     * are written for the two-tier strategy: a `vector` log for the TurboPuffer
     * path, and a `regex` log if the PG grep fallback fires.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static searchVaultV2VaultsVaultIdSearchPost(vaultId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/search',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Vault Sources
     * List the source IDs currently linked to this vault, with metadata.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static listVaultSourcesV2VaultsVaultIdSourcesGet(vaultId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}/sources',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Vault Source
     * Add a source to the vault's source_ids[]. Idempotent.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static addVaultSourceV2VaultsVaultIdSourcesPost(vaultId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/sources',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Vault Source
     * Remove a source from the vault's source_ids[]. Idempotent.
     * @param vaultId
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static removeVaultSourceV2VaultsVaultIdSourcesSourceIdDelete(vaultId, sourceId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vaults/{vault_id}/sources/{source_id}',
            path: {
                'vault_id': vaultId,
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List X Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listXInstallationsV2XInstallationsGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/x/installations',
        });
    }
    /**
     * Create X Installation
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static createXInstallationV2XInstallationsPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/x/installations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXInstallationV2XInstallationsInstallationIdGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/x/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteXInstallationV2XInstallationsInstallationIdDelete(installationId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/x/installations/{installation_id}',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Trigger X Index
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerXIndexV2XInstallationsInstallationIdIndexPost(installationId) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/x/installations/{installation_id}/index',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get X Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXIndexStatusV2XInstallationsInstallationIdStatusGet(installationId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/x/installations/{installation_id}/status',
            path: {
                'installation_id': installationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
