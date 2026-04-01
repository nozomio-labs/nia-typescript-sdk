import type { AdvisorRequest } from '../models/AdvisorRequest';
import type { AdvisorResponse } from '../models/AdvisorResponse';
import type { AnalyzeResponse } from '../models/AnalyzeResponse';
import type { Body_upload_and_subscribe_v2_dependencies_upload_post } from '../models/Body_upload_and_subscribe_v2_dependencies_upload_post';
import type { BootstrapKeyRequest } from '../models/BootstrapKeyRequest';
import type { BootstrapKeyResponse } from '../models/BootstrapKeyResponse';
import type { BulkDeleteRequest } from '../models/BulkDeleteRequest';
import type { BulkDeleteResponse } from '../models/BulkDeleteResponse';
import type { CategoryListCompatResponse } from '../models/CategoryListCompatResponse';
import type { CategoryResponse } from '../models/CategoryResponse';
import type { ClassifyLocalFolderRequest } from '../models/ClassifyLocalFolderRequest';
import type { ContextListCompatResponse } from '../models/ContextListCompatResponse';
import type { ContextSearchResponse } from '../models/ContextSearchResponse';
import type { ContextSemanticSearchResponse } from '../models/ContextSemanticSearchResponse';
import type { ContextShareRequest } from '../models/ContextShareRequest';
import type { ContextShareResponse } from '../models/ContextShareResponse';
import type { ContextShareUpdateRequest } from '../models/ContextShareUpdateRequest';
import type { DeepResearchRequestWithMode } from '../models/DeepResearchRequestWithMode';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { DependencyAnalyzeRequest } from '../models/DependencyAnalyzeRequest';
import type { DependencySubscribeRequest } from '../models/DependencySubscribeRequest';
import type { DetectRequest } from '../models/DetectRequest';
import type { DetectResponse } from '../models/DetectResponse';
import type { DocumentQueryRequest } from '../models/DocumentQueryRequest';
import type { DocumentQueryResponse } from '../models/DocumentQueryResponse';
import type { EngineeringExtractRequest } from '../models/EngineeringExtractRequest';
import type { EngineeringExtractResponse } from '../models/EngineeringExtractResponse';
import type { EngineeringQueryRequest } from '../models/EngineeringQueryRequest';
import type { ExtractRequest } from '../models/ExtractRequest';
import type { ExtractResponse } from '../models/ExtractResponse';
import type { GitHubGlobRequest } from '../models/GitHubGlobRequest';
import type { GitHubReadRequest } from '../models/GitHubReadRequest';
import type { GitHubSearchRequest } from '../models/GitHubSearchRequest';
import type { GlobalSourceSubscribeRequest } from '../models/GlobalSourceSubscribeRequest';
import type { GlobalSourceSubscribeResponse } from '../models/GlobalSourceSubscribeResponse';
import type { GoogleDriveInstallRequest } from '../models/GoogleDriveInstallRequest';
import type { GoogleDriveOAuthCallbackRequest } from '../models/GoogleDriveOAuthCallbackRequest';
import type { GrepRequestBody } from '../models/GrepRequestBody';
import type { LoginKeyRequest } from '../models/LoginKeyRequest';
import type { LoginKeyResponse } from '../models/LoginKeyResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { LoginVerifyRequest } from '../models/LoginVerifyRequest';
import type { LoginVerifyResponse } from '../models/LoginVerifyResponse';
import type { MkdirBody } from '../models/MkdirBody';
import type { MoveBody } from '../models/MoveBody';
import type { PackageSearchGrepRequest } from '../models/PackageSearchGrepRequest';
import type { PackageSearchHybridRequest } from '../models/PackageSearchHybridRequest';
import type { PackageSearchReadFileRequest } from '../models/PackageSearchReadFileRequest';
import type { QuerySearchRequest } from '../models/QuerySearchRequest';
import type { ResendCodeResponse } from '../models/ResendCodeResponse';
import type { routes__v2__categories__CategoryCreate } from '../models/routes__v2__categories__CategoryCreate';
import type { routes__v2__categories__CategoryUpdate } from '../models/routes__v2__categories__CategoryUpdate';
import type { routes__v2__dependencies__SubscribeResponse } from '../models/routes__v2__dependencies__SubscribeResponse';
import type { routes__v2__google_drive__GoogleDriveIndexRequest } from '../models/routes__v2__google_drive__GoogleDriveIndexRequest';
import type { routes__v2__google_drive__GoogleDriveSelectionRequest } from '../models/routes__v2__google_drive__GoogleDriveSelectionRequest';
import type { routes__v2__google_drive__GoogleDriveSyncRequest } from '../models/routes__v2__google_drive__GoogleDriveSyncRequest';
import type { routes__v2__slack__SlackChannelsConfigRequest } from '../models/routes__v2__slack__SlackChannelsConfigRequest';
import type { routes__v2__x__XInstallationRequest } from '../models/routes__v2__x__XInstallationRequest';
import type { SignupRequest } from '../models/SignupRequest';
import type { SignupResponse } from '../models/SignupResponse';
import type { SlackGrepRequest } from '../models/SlackGrepRequest';
import type { SlackInstallRequest } from '../models/SlackInstallRequest';
import type { SlackOAuthCallbackRequest } from '../models/SlackOAuthCallbackRequest';
import type { SlackTokenRequest } from '../models/SlackTokenRequest';
import type { Source } from '../models/Source';
import type { SourceAnnotation } from '../models/SourceAnnotation';
import type { SourceAnnotationCreateRequest } from '../models/SourceAnnotationCreateRequest';
import type { SourceAnnotationUpdateRequest } from '../models/SourceAnnotationUpdateRequest';
import type { SourceContentResponse } from '../models/SourceContentResponse';
import type { SourceCreateRequest } from '../models/SourceCreateRequest';
import type { SourceCurationResponse } from '../models/SourceCurationResponse';
import type { SourceCurationUpdateRequest } from '../models/SourceCurationUpdateRequest';
import type { SourceDeleteResponse } from '../models/SourceDeleteResponse';
import type { SourceListResponse } from '../models/SourceListResponse';
import type { SourceResolveResponse } from '../models/SourceResolveResponse';
import type { SourcesSummaryResponse } from '../models/SourcesSummaryResponse';
import type { SourceUpdateRequest } from '../models/SourceUpdateRequest';
import type { SourceUploadUrlRequest } from '../models/SourceUploadUrlRequest';
import type { SourceUploadUrlResponse } from '../models/SourceUploadUrlResponse';
import type { TracerRequest } from '../models/TracerRequest';
import type { UniversalSearchRequestWithMode } from '../models/UniversalSearchRequestWithMode';
import type { UsageSummaryResponse } from '../models/UsageSummaryResponse';
import type { VerifyRequest } from '../models/VerifyRequest';
import type { VerifyResponse } from '../models/VerifyResponse';
import type { WebSearchRequestWithMode } from '../models/WebSearchRequestWithMode';
import type { WriteBatchBody } from '../models/WriteBatchBody';
import type { WriteFileBody } from '../models/WriteFileBody';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiService {
    /**
     * Context-aware code advisor
     * Analyze codebase context against Nia's indexed documentation to get tailored recommendations.
     * @param requestBody
     * @returns AdvisorResponse Successful Response
     * @throws ApiError
     */
    static analyzeCodebaseV2AdvisorPost(requestBody: AdvisorRequest): CancelablePromise<AdvisorResponse>;
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
    static bootstrapKeyV2AuthBootstrapKeyPost(requestBody: BootstrapKeyRequest): CancelablePromise<BootstrapKeyResponse>;
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
    static loginV2AuthLoginPost(requestBody: LoginRequest): CancelablePromise<LoginResponse>;
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
    static loginKeyV2AuthLoginKeyPost(requestBody: LoginKeyRequest): CancelablePromise<LoginKeyResponse>;
    /**
     * Login Verify
     * Verify login code and receive a new full-access API key.
     * @param requestBody
     * @returns LoginVerifyResponse Successful Response
     * @throws ApiError
     */
    static loginVerifyV2AuthLoginVerifyPost(requestBody: LoginVerifyRequest): CancelablePromise<LoginVerifyResponse>;
    /**
     * Resend Code
     * Resend the verification code for an unverified API key.
     *
     * Requires the read-only API key in the Authorization header.
     * @returns ResendCodeResponse Successful Response
     * @throws ApiError
     */
    static resendCodeV2AuthResendCodePost(): CancelablePromise<ResendCodeResponse>;
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
    static signupV2AuthSignupPost(requestBody: SignupRequest): CancelablePromise<SignupResponse>;
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
    static verifyV2AuthVerifyPost(requestBody: VerifyRequest): CancelablePromise<VerifyResponse>;
    /**
     * Bulk delete resources
     * Delete multiple resources in a single request. Supports repositories, documentation, research papers, contexts, and local folders.
     * @param requestBody
     * @returns BulkDeleteResponse Successful Response
     * @throws ApiError
     */
    static bulkDeleteResourcesV2BulkDeletePost(requestBody: BulkDeleteRequest): CancelablePromise<BulkDeleteResponse>;
    /**
     * List categories
     * List categories for the authenticated user/organization.
     * @param limit Number of categories to return
     * @param offset Number of categories to skip
     * @returns CategoryListCompatResponse Successful Response
     * @throws ApiError
     */
    static listCategoriesV2CategoriesGet(limit?: number, offset?: number): CancelablePromise<CategoryListCompatResponse>;
    /**
     * Create category
     * Create a new category for organizing data sources.
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    static createCategoryV2CategoriesPost(requestBody: routes__v2__categories__CategoryCreate): CancelablePromise<CategoryResponse>;
    /**
     * Update category
     * Update an existing category.
     * @param categoryId
     * @param requestBody
     * @returns CategoryResponse Successful Response
     * @throws ApiError
     */
    static updateCategoryV2CategoriesCategoryIdPatch(categoryId: string, requestBody: routes__v2__categories__CategoryUpdate): CancelablePromise<CategoryResponse>;
    /**
     * Delete category
     * Delete a category. Data sources with this category will become uncategorized.
     * @param categoryId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteCategoryV2CategoriesCategoryIdDelete(categoryId: string): CancelablePromise<any>;
    /**
     * List Available Connectors
     * List all available connector types with their metadata.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listAvailableConnectorsV2ConnectorsGet(): CancelablePromise<any>;
    /**
     * List Installations
     * List all connector installations for the current user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listInstallationsV2ConnectorsInstallationsGet(): CancelablePromise<any>;
    /**
     * Delete Installation
     * Disconnect a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteInstallationV2ConnectorsInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
    /**
     * Index Installation
     * Trigger indexing for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static indexInstallationV2ConnectorsInstallationsInstallationIdIndexPost(installationId: string): CancelablePromise<any>;
    /**
     * Update Schedule
     * Update sync schedule for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateScheduleV2ConnectorsInstallationsInstallationIdSchedulePatch(installationId: string): CancelablePromise<any>;
    /**
     * Get Installation Status
     * Get sync status and health for a connector installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getInstallationStatusV2ConnectorsInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
    /**
     * Install Connector
     * Install a connector — either store API key or initiate OAuth flow.
     * @param connectorType
     * @returns any Successful Response
     * @throws ApiError
     */
    static installConnectorV2ConnectorsConnectorTypeInstallPost(connectorType: string): CancelablePromise<any>;
    /**
     * Oauth Callback
     * Handle OAuth callback — exchange code, create installation, redirect to frontend.
     * @param connectorType
     * @param code
     * @param state
     * @returns any Successful Response
     * @throws ApiError
     */
    static oauthCallbackV2ConnectorsConnectorTypeOauthCallbackGet(connectorType: string, code: string, state: string): CancelablePromise<any>;
    /**
     * Save context
     * Save conversation context for cross-agent sharing. Indexed in vector store for semantic search.
     * @param requestBody
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    static saveContextV2V2ContextsPost(requestBody: ContextShareRequest): CancelablePromise<ContextShareResponse>;
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
    static listContextsV2V2ContextsGet(limit?: number, offset?: number, tags?: (string | null), agentSource?: (string | null), memoryType?: (string | null)): CancelablePromise<ContextListCompatResponse>;
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
    static searchContextsV2V2ContextsSearchGet(q: string, limit?: number, tags?: (string | null), agentSource?: (string | null)): CancelablePromise<ContextSearchResponse>;
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
    static semanticSearchContextsV2V2ContextsSemanticSearchGet(q: string, limit?: number, includeHighlights?: boolean, workspaceFilter?: (string | null)): CancelablePromise<ContextSemanticSearchResponse>;
    /**
     * Get context
     * Retrieve a specific context by ID.
     * @param contextId
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    static getContextV2V2ContextsContextIdGet(contextId: string): CancelablePromise<ContextShareResponse>;
    /**
     * Update context
     * Update an existing context. Re-indexes in vector store if content changes.
     * @param contextId
     * @param requestBody
     * @returns ContextShareResponse Successful Response
     * @throws ApiError
     */
    static updateContextV2V2ContextsContextIdPut(contextId: string, requestBody: ContextShareUpdateRequest): CancelablePromise<ContextShareResponse>;
    /**
     * Delete context
     * Soft delete a context (marks inactive).
     * @param contextId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteContextV2V2ContextsContextIdDelete(contextId: string): CancelablePromise<DeleteResponse>;
    /**
     * Analyze package manifest
     * Parse a package manifest and return dependency information with documentation URL mappings. This is a preview - no subscriptions are created.
     * @param requestBody
     * @returns AnalyzeResponse Successful Response
     * @throws ApiError
     */
    static analyzeDependenciesV2DependenciesAnalyzePost(requestBody: DependencyAnalyzeRequest): CancelablePromise<AnalyzeResponse>;
    /**
     * Subscribe to documentation for manifest dependencies
     * Parse a package manifest and automatically subscribe to documentation for all dependencies.
     * @param requestBody
     * @returns routes__v2__dependencies__SubscribeResponse Successful Response
     * @throws ApiError
     */
    static subscribeToDependenciesV2DependenciesSubscribePost(requestBody: DependencySubscribeRequest): CancelablePromise<routes__v2__dependencies__SubscribeResponse>;
    /**
     * Upload manifest file and subscribe to dependencies
     * Upload a package manifest file and subscribe to documentation for all dependencies.
     * @param formData
     * @returns routes__v2__dependencies__SubscribeResponse Successful Response
     * @throws ApiError
     */
    static uploadAndSubscribeV2DependenciesUploadPost(formData: Body_upload_and_subscribe_v2_dependencies_upload_post): CancelablePromise<routes__v2__dependencies__SubscribeResponse>;
    /**
     * Query document(s) with an AI agent
     * Run the full document agent against one or more indexed PDFs or documents. The agent uses tools (search, read sections, read pages) to research the document(s) and produce a comprehensive answer with citations. Supports optional structured output via json_schema.
     * @param requestBody
     * @returns DocumentQueryResponse Successful Response
     * @throws ApiError
     */
    static documentQueryV2DocumentAgentPost(requestBody: DocumentQueryRequest): CancelablePromise<DocumentQueryResponse>;
    /**
     * Start Extraction
     * @param requestBody
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    static startExtractionV2ExtractPost(requestBody: ExtractRequest): CancelablePromise<ExtractResponse>;
    /**
     * Start Detect Extraction
     * @param requestBody
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    static startDetectExtractionV2ExtractDetectPost(requestBody: DetectRequest): CancelablePromise<DetectResponse>;
    /**
     * Get Detect Extraction
     * @param extractionId
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    static getDetectExtractionV2ExtractDetectExtractionIdGet(extractionId: string): CancelablePromise<DetectResponse>;
    /**
     * Get Detect Page Image
     * @param extractionId
     * @param pageNumber
     * @returns any Successful Response
     * @throws ApiError
     */
    static getDetectPageImageV2ExtractDetectExtractionIdPagePageNumberImageGet(extractionId: string, pageNumber: number): CancelablePromise<any>;
    /**
     * Start Engineering Extraction
     * @param requestBody
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    static startEngineeringExtractionV2ExtractEngineeringPost(requestBody: EngineeringExtractRequest): CancelablePromise<EngineeringExtractResponse>;
    /**
     * Get Engineering Extraction
     * @param extractionId
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    static getEngineeringExtractionV2ExtractEngineeringExtractionIdGet(extractionId: string): CancelablePromise<EngineeringExtractResponse>;
    /**
     * Query Engineering Extraction
     * @param extractionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static queryEngineeringExtractionV2ExtractEngineeringExtractionIdQueryPost(extractionId: string, requestBody: EngineeringQueryRequest): CancelablePromise<any>;
    /**
     * Get Extraction
     * @param extractionId
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    static getExtractionV2ExtractExtractionIdGet(extractionId: string): CancelablePromise<ExtractResponse>;
    /**
     * List Extractions
     * @param type Filter by type: table or engineering
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static listExtractionsV2ExtractionsGet(type?: (string | null), limit?: number, offset?: number): CancelablePromise<any>;
    /**
     * Fs Write
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteV2FsSourceIdFilesPut(sourceId: string, requestBody: WriteFileBody): CancelablePromise<any>;
    /**
     * Fs Delete
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsDeleteV2FsSourceIdFilesDelete(sourceId: string, path: string): CancelablePromise<any>;
    /**
     * Fs Write Batch
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsWriteBatchV2FsSourceIdFilesBatchPut(sourceId: string, requestBody: WriteBatchBody): CancelablePromise<any>;
    /**
     * Fs Find
     * @param sourceId
     * @param pattern Glob pattern (e.g. ***.ts)
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsFindV2FsSourceIdFindGet(sourceId: string, pattern: string): CancelablePromise<any>;
    /**
     * Fs Grep
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsGrepV2FsSourceIdGrepPost(sourceId: string, requestBody: GrepRequestBody): CancelablePromise<any>;
    /**
     * Fs Info
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsInfoV2FsSourceIdInfoGet(sourceId: string): CancelablePromise<any>;
    /**
     * Fs Ls
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsLsV2FsSourceIdLsGet(sourceId: string, path?: string): CancelablePromise<any>;
    /**
     * Fs Mkdir
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMkdirV2FsSourceIdMkdirPost(sourceId: string, requestBody: MkdirBody): CancelablePromise<any>;
    /**
     * Fs Mv
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsMvV2FsSourceIdMvPost(sourceId: string, requestBody: MoveBody): CancelablePromise<any>;
    /**
     * Fs Read
     * @param sourceId
     * @param path File path to read
     * @param lineStart
     * @param lineEnd
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsReadV2FsSourceIdReadGet(sourceId: string, path: string, lineStart?: (number | null), lineEnd?: (number | null)): CancelablePromise<any>;
    /**
     * Fs Tree
     * @param sourceId
     * @param path
     * @returns any Successful Response
     * @throws ApiError
     */
    static fsTreeV2FsSourceIdTreeGet(sourceId: string, path?: string): CancelablePromise<any>;
    /**
     * Github Glob
     * Find files matching a glob pattern in a GitHub repository.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static githubGlobV2GithubGlobPost(requestBody: GitHubGlobRequest): CancelablePromise<any>;
    /**
     * Github Read
     * Read a file from a GitHub repository with optional line range.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static githubReadV2GithubReadPost(requestBody: GitHubReadRequest): CancelablePromise<any>;
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
    static githubCodeSearchV2GithubSearchPost(requestBody: GitHubSearchRequest): CancelablePromise<any>;
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
    static createTracerJobV2GithubTracerPost(requestBody: TracerRequest): CancelablePromise<any>;
    /**
     * List Tracer Jobs
     * List Tracer jobs for the authenticated user.
     * @param status Filter by status
     * @param limit Max results
     * @param skip Offset for pagination
     * @returns any Successful Response
     * @throws ApiError
     */
    static listTracerJobsV2GithubTracerGet(status?: (string | null), limit?: number, skip?: number): CancelablePromise<any>;
    /**
     * Delete Tracer Job
     * Delete a Tracer job by session_id or workflow_run_id.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteTracerJobV2GithubTracerJobIdDelete(jobId: string): CancelablePromise<any>;
    /**
     * Get Tracer Job
     * Get the status and result of a Tracer search job.
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getTracerJobV2GithubTracerJobIdGet(jobId: string): CancelablePromise<any>;
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
    static streamTracerJobV2GithubTracerJobIdStreamGet(jobId: string): CancelablePromise<any>;
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
    static githubTreeV2GithubTreeOwnerRepoGet(owner: string, repo: string, ref?: string, path?: (string | null)): CancelablePromise<any>;
    /**
     * Generate Install Url
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2GoogleDriveInstallPost(requestBody: GoogleDriveInstallRequest): CancelablePromise<any>;
    /**
     * Handle Oauth Callback
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2GoogleDriveInstallCallbackPost(requestBody: GoogleDriveOAuthCallbackRequest): CancelablePromise<any>;
    /**
     * List Google Drive Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listGoogleDriveInstallationsV2GoogleDriveInstallationsGet(): CancelablePromise<any>;
    /**
     * Get Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdGet(installationId: string): CancelablePromise<any>;
    /**
     * Delete Google Drive Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteGoogleDriveInstallationV2GoogleDriveInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
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
    static browseGoogleDriveItemsV2GoogleDriveInstallationsInstallationIdBrowseGet(installationId: string, folderId?: (string | null), q?: (string | null), pageToken?: (string | null), pageSize?: number): CancelablePromise<any>;
    /**
     * Trigger Google Drive Index
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveIndexV2GoogleDriveInstallationsInstallationIdIndexPost(installationId: string, requestBody?: (routes__v2__google_drive__GoogleDriveIndexRequest | null)): CancelablePromise<any>;
    /**
     * Get Google Drive Selection
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionGet(installationId: string): CancelablePromise<any>;
    /**
     * Update Google Drive Selection
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateGoogleDriveSelectionV2GoogleDriveInstallationsInstallationIdSelectionPost(installationId: string, requestBody: routes__v2__google_drive__GoogleDriveSelectionRequest): CancelablePromise<any>;
    /**
     * Get Google Drive Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGoogleDriveIndexStatusV2GoogleDriveInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
    /**
     * Trigger Google Drive Sync
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerGoogleDriveSyncV2GoogleDriveInstallationsInstallationIdSyncPost(installationId: string, requestBody?: (routes__v2__google_drive__GoogleDriveSyncRequest | null)): CancelablePromise<any>;
    /**
     * Grep package source
     * Regex search over public package source code (npm, PyPI, crates.io, Go modules).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchGrepV2V2PackagesGrepPost(requestBody: PackageSearchGrepRequest): CancelablePromise<any>;
    /**
     * Read package file
     * Read specific lines from a package source file. Max 200 lines per request.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchReadFileV2V2PackagesReadPost(requestBody: PackageSearchReadFileRequest): CancelablePromise<any>;
    /**
     * Semantic package search
     * Hybrid semantic + keyword search over package source. 1-5 natural language queries.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchHybridV2V2PackagesSearchPost(requestBody: PackageSearchHybridRequest): CancelablePromise<any>;
    /**
     * Unified search
     * Single search endpoint with a mode discriminator.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static unifiedSearchV2V2SearchPost(requestBody: (QuerySearchRequest | WebSearchRequestWithMode | DeepResearchRequestWithMode | UniversalSearchRequestWithMode)): CancelablePromise<any>;
    /**
     * Generate Install Url
     * Generate a Slack OAuth authorization URL.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateInstallUrlV2SlackInstallPost(requestBody: SlackInstallRequest): CancelablePromise<any>;
    /**
     * Handle Oauth Callback
     * Exchange an OAuth code for tokens and create the installation.
     *
     * Called by the frontend callback route after the user authorizes the Slack app.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static handleOauthCallbackV2SlackInstallCallbackPost(requestBody: SlackOAuthCallbackRequest): CancelablePromise<any>;
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
    static registerExternalTokenV2SlackInstallTokenPost(requestBody: SlackTokenRequest): CancelablePromise<any>;
    /**
     * List Slack Installations
     * List all Slack workspace connections for the authenticated user/org.
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackInstallationsV2SlackInstallationsGet(): CancelablePromise<any>;
    /**
     * Get Slack Installation
     * Get details for a specific Slack installation.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackInstallationV2SlackInstallationsInstallationIdGet(installationId: string): CancelablePromise<any>;
    /**
     * Delete Slack Installation
     * Disconnect a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteSlackInstallationV2SlackInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
    /**
     * List Slack Channels
     * List available Slack channels from the workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static listSlackChannelsV2SlackInstallationsInstallationIdChannelsGet(installationId: string): CancelablePromise<any>;
    /**
     * Configure Slack Channels
     * Configure which channels to index.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static configureSlackChannelsV2SlackInstallationsInstallationIdChannelsPost(installationId: string, requestBody: routes__v2__slack__SlackChannelsConfigRequest): CancelablePromise<any>;
    /**
     * Grep Slack Messages
     * BM25 keyword search over indexed Slack messages in TurboPuffer.
     * @param installationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSlackMessagesV2SlackInstallationsInstallationIdGrepPost(installationId: string, requestBody: SlackGrepRequest): CancelablePromise<any>;
    /**
     * Trigger Slack Index
     * Trigger a full re-index of the Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerSlackIndexV2SlackInstallationsInstallationIdIndexPost(installationId: string): CancelablePromise<any>;
    /**
     * Read Slack Messages
     * Read recent messages from a Slack channel (live from Slack API).
     * @param installationId
     * @param channel
     * @param limit
     * @returns any Successful Response
     * @throws ApiError
     */
    static readSlackMessagesV2SlackInstallationsInstallationIdMessagesGet(installationId: string, channel?: (string | null), limit?: number): CancelablePromise<any>;
    /**
     * Get Slack Index Status
     * Get the indexing status for a Slack workspace.
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSlackIndexStatusV2SlackInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
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
    static listSourcesV2SourcesGet(type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null), query?: (string | null), status?: (string | null), categoryId?: (string | null), limit?: number, offset?: number): CancelablePromise<SourceListResponse>;
    /**
     * Create Source
     * @param requestBody
     * @returns Source Successful Response
     * @throws ApiError
     */
    static createSourceV2SourcesPost(requestBody: SourceCreateRequest): CancelablePromise<Source>;
    /**
     * Get sources summary
     * Get counts and recent names for all source types. Designed for quick inventory checks.
     * @returns SourcesSummaryResponse Successful Response
     * @throws ApiError
     */
    static getSourcesSummaryV2SourcesSummaryGet(): CancelablePromise<SourcesSummaryResponse>;
    /**
     * Resolve Source
     * @param identifier Display name, URL, or slug
     * @param type Source type hint
     * @returns SourceResolveResponse Successful Response
     * @throws ApiError
     */
    static resolveSourceV2SourcesResolveGet(identifier: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<SourceResolveResponse>;
    /**
     * Subscribe to a global source
     * Subscribe to an existing globally indexed public source. Creates a local reference for instant access without re-indexing.
     * @param requestBody
     * @returns GlobalSourceSubscribeResponse Successful Response
     * @throws ApiError
     */
    static subscribeSourceV2SourcesSubscribePost(requestBody: GlobalSourceSubscribeRequest): CancelablePromise<GlobalSourceSubscribeResponse>;
    /**
     * Get PDF upload URL
     * Generate a signed URL for direct PDF upload. Use the returned gcs_path in POST /v2/sources.
     * @param requestBody
     * @returns SourceUploadUrlResponse Successful Response
     * @throws ApiError
     */
    static createSourceUploadUrlV2SourcesUploadUrlPost(requestBody: SourceUploadUrlRequest): CancelablePromise<SourceUploadUrlResponse>;
    /**
     * Get Source
     * @param sourceId
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    static getSourceV2SourcesSourceIdGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<Source>;
    /**
     * Update Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns Source Successful Response
     * @throws ApiError
     */
    static updateSourceV2SourcesSourceIdPatch(sourceId: string, requestBody: SourceUpdateRequest, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<Source>;
    /**
     * Delete Source
     * @param sourceId
     * @param type Source type hint
     * @returns SourceDeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteSourceV2SourcesSourceIdDelete(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<SourceDeleteResponse>;
    /**
     * List Source Annotations
     * @param sourceId
     * @param type Source type hint
     * @returns SourceAnnotation Successful Response
     * @throws ApiError
     */
    static listSourceAnnotationsV2SourcesSourceIdAnnotationsGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<Array<SourceAnnotation>>;
    /**
     * Create Source Annotation
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static createSourceAnnotationV2SourcesSourceIdAnnotationsPost(sourceId: string, requestBody: SourceAnnotationCreateRequest, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<SourceCurationResponse>;
    /**
     * Update Source Annotation
     * @param sourceId
     * @param annotationId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static updateSourceAnnotationV2SourcesSourceIdAnnotationsAnnotationIdPatch(sourceId: string, annotationId: string, requestBody: SourceAnnotationUpdateRequest, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<SourceCurationResponse>;
    /**
     * Delete Source Annotation
     * @param sourceId
     * @param annotationId
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static deleteSourceAnnotationV2SourcesSourceIdAnnotationsAnnotationIdDelete(sourceId: string, annotationId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<SourceCurationResponse>;
    /**
     * Get Source Classification
     * @param sourceId
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSourceClassificationV2SourcesSourceIdClassificationGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<any>;
    /**
     * Update Source Classification
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateSourceClassificationV2SourcesSourceIdClassificationPatch(sourceId: string, requestBody: ClassifyLocalFolderRequest, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<any>;
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
    static getSourceContentV2SourcesSourceIdContentGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null), path?: (string | null), url?: (string | null), branch?: (string | null), page?: (number | null), treeNodeId?: (string | null), lineStart?: (number | null), lineEnd?: (number | null), maxLength?: (number | null)): CancelablePromise<SourceContentResponse>;
    /**
     * Get Source Curation
     * @param sourceId
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static getSourceCurationV2SourcesSourceIdCurationGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<SourceCurationResponse>;
    /**
     * Update Source Curation
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns SourceCurationResponse Successful Response
     * @throws ApiError
     */
    static updateSourceCurationV2SourcesSourceIdCurationPut(sourceId: string, requestBody: SourceCurationUpdateRequest, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<SourceCurationResponse>;
    /**
     * Grep Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static grepSourceV2SourcesSourceIdGrepPost(sourceId: string, requestBody: Record<string, any>, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<any>;
    /**
     * Sync Source
     * @param sourceId
     * @param requestBody
     * @param type Source type hint
     * @returns any Successful Response
     * @throws ApiError
     */
    static syncSourceV2SourcesSourceIdSyncPost(sourceId: string, requestBody: Record<string, any>, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null)): CancelablePromise<any>;
    /**
     * Get Source Tree
     * @param sourceId
     * @param type Source type hint
     * @param branch Repository branch
     * @param maxDepth
     * @returns any Successful Response
     * @throws ApiError
     */
    static getSourceTreeV2SourcesSourceIdTreeGet(sourceId: string, type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive' | 'connector' | null), branch?: (string | null), maxDepth?: number): CancelablePromise<any>;
    /**
     * Get usage summary
     * Get usage counts and limits for current billing period (queries, indexing, oracle, etc.).
     * @returns UsageSummaryResponse Successful Response
     * @throws ApiError
     */
    static getUsageSummaryV2V2UsageGet(): CancelablePromise<UsageSummaryResponse>;
    /**
     * List X Installations
     * @returns any Successful Response
     * @throws ApiError
     */
    static listXInstallationsV2XInstallationsGet(): CancelablePromise<any>;
    /**
     * Create X Installation
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static createXInstallationV2XInstallationsPost(requestBody: routes__v2__x__XInstallationRequest): CancelablePromise<any>;
    /**
     * Get X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXInstallationV2XInstallationsInstallationIdGet(installationId: string): CancelablePromise<any>;
    /**
     * Delete X Installation
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteXInstallationV2XInstallationsInstallationIdDelete(installationId: string): CancelablePromise<any>;
    /**
     * Trigger X Index
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static triggerXIndexV2XInstallationsInstallationIdIndexPost(installationId: string): CancelablePromise<any>;
    /**
     * Get X Index Status
     * @param installationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getXIndexStatusV2XInstallationsInstallationIdStatusGet(installationId: string): CancelablePromise<any>;
}
