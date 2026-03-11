import { DefaultService, OpenAPI, V2ApiSearchService, V2ApiSourcesService, } from "./generated";
import { NiaTimeoutError } from "./errors";
import { withRetries } from "./retry";
const TERMINAL_JOB_STATUSES = new Set(["completed", "failed", "cancelled"]);
function stripTrailingSlashes(value) {
    return value.replace(/\/+$/, "");
}
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function removeUndefined(value) {
    return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
}
function toOptionalString(value) {
    if (value === undefined)
        return undefined;
    if (value === null)
        return null;
    return typeof value === "string" ? value : String(value);
}
function toStringArray(value) {
    if (!Array.isArray(value))
        return undefined;
    return value.map((entry) => String(entry));
}
function toDaemonSyncFiltersPayload(filters) {
    if (filters === undefined)
        return undefined;
    if (filters === null)
        return null;
    return removeUndefined({
        contact_ids: filters.contactIds,
        conversation_ids: filters.conversationIds,
        sender_roles: filters.senderRoles,
        time_after: filters.timeAfter,
        time_before: filters.timeBefore,
        backfill_days: filters.backfillDays,
    });
}
function fromDaemonSyncFiltersPayload(filters) {
    if (filters === undefined)
        return undefined;
    if (filters === null)
        return null;
    if (!isRecord(filters))
        return undefined;
    return removeUndefined({
        contactIds: toStringArray(filters.contact_ids),
        conversationIds: toStringArray(filters.conversation_ids),
        senderRoles: toStringArray(filters.sender_roles),
        timeAfter: toOptionalString(filters.time_after),
        timeBefore: toOptionalString(filters.time_before),
        backfillDays: typeof filters.backfill_days === "number"
            ? filters.backfill_days
            : undefined,
    });
}
function toDaemonSyncFilePayload(file) {
    return {
        path: file.path,
        content: file.content ?? "",
        change_type: file.changeType ?? "modified",
        metadata: file.metadata ?? {},
        connector_metadata: file.connectorMetadata ?? {},
    };
}
function fromCreateDaemonSourcePayload(payload) {
    const source = isRecord(payload) ? payload : {};
    return {
        localFolderId: String(source.local_folder_id ?? ""),
        path: String(source.path ?? ""),
        displayName: String(source.display_name ?? ""),
        detectedType: toOptionalString(source.detected_type),
        status: String(source.status ?? ""),
    };
}
function fromDaemonSourcePayload(payload) {
    const source = isRecord(payload) ? payload : {};
    return {
        localFolderId: String(source.local_folder_id ?? ""),
        path: toOptionalString(source.path),
        displayName: String(source.display_name ?? ""),
        detectedType: toOptionalString(source.detected_type),
        cursor: isRecord(source.cursor) ? source.cursor : {},
        syncFilters: fromDaemonSyncFiltersPayload(source.sync_filters),
        lastSynced: toOptionalString(source.last_synced),
        lastSeenAt: toOptionalString(source.last_seen_at),
        lastSyncError: toOptionalString(source.last_sync_error),
        status: String(source.status ?? ""),
        syncEnabled: Boolean(source.sync_enabled),
    };
}
function fromDaemonSyncPayload(payload) {
    const response = isRecord(payload) ? payload : {};
    return {
        status: String(response.status ?? ""),
        chunksIndexed: typeof response.chunks_indexed === "number" ? response.chunks_indexed : 0,
        message: toOptionalString(response.message),
        idempotencyKey: toOptionalString(response.idempotency_key),
    };
}
function fromDaemonResyncPayload(payload) {
    const response = isRecord(payload) ? payload : {};
    return {
        status: String(response.status ?? ""),
        localFolderId: String(response.local_folder_id ?? ""),
        message: toOptionalString(response.message),
    };
}
function parseDaemonResponse(text) {
    if (!text)
        return null;
    try {
        return JSON.parse(text);
    }
    catch {
        return text;
    }
}
function formatDaemonError(status, statusText, payload) {
    if (isRecord(payload) && payload.detail !== undefined)
        return new Error(`Daemon request failed (${status}): ${String(payload.detail)}`);
    if (typeof payload === "string" && payload.trim())
        return new Error(`Daemon request failed (${status}): ${payload}`);
    return new Error(`Daemon request failed (${status}): ${statusText || "Unknown error"}`);
}
function createDaemonIdempotencyKey() {
    if (typeof globalThis.crypto !== "undefined" &&
        typeof globalThis.crypto.randomUUID === "function") {
        return globalThis.crypto.randomUUID();
    }
    return `daemon-sync-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
export class SearchClient {
    retry;
    constructor(retry) {
        this.retry = retry;
    }
    query(args) {
        return withRetries(() => V2ApiSearchService.unifiedSearchV2V2SearchPost({
            mode: "query",
            ...args,
        }), this.retry);
    }
    web(args) {
        return withRetries(() => V2ApiSearchService.unifiedSearchV2V2SearchPost({
            mode: "web",
            ...args,
        }), this.retry);
    }
    deep(args) {
        return withRetries(() => V2ApiSearchService.unifiedSearchV2V2SearchPost({
            mode: "deep",
            ...args,
        }), this.retry);
    }
    universal(args) {
        return withRetries(() => V2ApiSearchService.unifiedSearchV2V2SearchPost({
            mode: "universal",
            ...args,
        }), this.retry);
    }
}
export class SourcesClient {
    retry;
    constructor(retry) {
        this.retry = retry;
    }
    create(payload) {
        return withRetries(() => V2ApiSourcesService.createSourceV2SourcesPost(payload), this.retry);
    }
    list(params = {}) {
        return withRetries(() => V2ApiSourcesService.listSourcesV2SourcesGet(params.type, params.query, params.status, params.categoryId, params.limit ?? 20, params.offset ?? 0), this.retry);
    }
    resolve(identifier, type) {
        return withRetries(() => V2ApiSourcesService.resolveSourceV2SourcesResolveGet(identifier, type), this.retry);
    }
}
export class DaemonClient {
    retry;
    apiKey;
    baseUrl;
    constructor(retry, apiKey, baseUrl) {
        this.retry = retry;
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    request(path, init) {
        const execute = async () => {
            const response = await fetch(`${stripTrailingSlashes(this.baseUrl)}${path}`, {
                method: init.method,
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json",
                },
                body: init.body === undefined ? undefined : JSON.stringify(init.body),
            });
            const payload = parseDaemonResponse(await response.text());
            if (!response.ok)
                throw formatDaemonError(response.status, response.statusText, payload);
            return payload;
        };
        if (init.retry === false) {
            return execute();
        }
        return withRetries(execute, this.retry);
    }
    async createSource(input) {
        const payload = await this.request("/daemon/sources", {
            method: "POST",
            retry: false,
            body: removeUndefined({
                path: input.path,
                display_name: input.displayName,
                detected_type: input.detectedType,
                sync_filters: toDaemonSyncFiltersPayload(input.syncFilters),
            }),
        });
        return fromCreateDaemonSourcePayload(payload);
    }
    async listSources() {
        const payload = await this.request("/daemon/sources", {
            method: "GET",
        });
        if (!Array.isArray(payload))
            return [];
        return payload.map((source) => fromDaemonSourcePayload(source));
    }
    async pushSync(input) {
        const idempotencyKey = input.idempotencyKey ?? createDaemonIdempotencyKey();
        const payload = await this.request("/daemon/sync", {
            method: "POST",
            body: removeUndefined({
                local_folder_id: input.localFolderId,
                files: input.files.map((file) => toDaemonSyncFilePayload(file)),
                cursor: input.cursor ?? {},
                stats: input.stats ?? {},
                connector_type: input.connectorType,
                is_final_batch: input.isFinalBatch,
                idempotency_key: idempotencyKey,
            }),
        });
        return fromDaemonSyncPayload(payload);
    }
    async resync(localFolderId) {
        const payload = await this.request(`/daemon/sources/${encodeURIComponent(localFolderId)}/resync`, {
            method: "POST",
        });
        return fromDaemonResyncPayload(payload);
    }
    deleteSource(localFolderId) {
        return this.request(`/daemon/sources/${encodeURIComponent(localFolderId)}`, {
            method: "DELETE",
        });
    }
    heartbeat(sourceIds) {
        return this.request("/daemon/heartbeat", {
            method: "POST",
            body: { source_ids: sourceIds },
        });
    }
    reportError(localFolderId, error) {
        const payload = typeof error === "string"
            ? { error }
            : removeUndefined({
                error: error.error,
                path: error.path,
            });
        return this.request(`/daemon/sources/${encodeURIComponent(localFolderId)}/error`, {
            method: "POST",
            body: payload,
        });
    }
    // ---------------------------------------------------------------------------
    // E2E Client-Indexed Methods
    // ---------------------------------------------------------------------------
    async pushE2ESync(input) {
        const idempotencyKey = input.idempotencyKey ?? createDaemonIdempotencyKey();
        const payload = await this.request("/daemon/e2e/sync", {
            method: "POST",
            body: removeUndefined({
                local_folder_id: input.localFolderId,
                chunks: input.chunks.map((c) => ({
                    chunk_id: c.chunkId,
                    ciphertext: c.ciphertext,
                    embedding: c.embedding,
                    blind_index_tokens: c.blindIndexTokens ?? [],
                    contact_hash: c.contactHash,
                    conversation_hash: c.conversationHash,
                    day_bucket: c.dayBucket,
                    sender_role: c.senderRole,
                    metadata_ciphertext: c.metadataCiphertext,
                })),
                embedding_profile: input.embeddingProfile ?? "zembed-1-2560",
                cursor: input.cursor ?? {},
                stats: input.stats ?? {},
                is_final_batch: input.isFinalBatch,
                idempotency_key: idempotencyKey,
                connector_type: input.connectorType,
            }),
        });
        return {
            status: String(payload.status ?? ""),
            chunksStored: typeof payload.chunks_stored === "number" ? payload.chunks_stored : 0,
            message: typeof payload.message === "string" ? payload.message : null,
            idempotencyKey: typeof payload.idempotency_key === "string"
                ? payload.idempotency_key
                : null,
        };
    }
    async createE2ESession(input) {
        const payload = await this.request("/daemon/e2e/sessions", {
            method: "POST",
            retry: false,
            body: removeUndefined({
                local_folder_id: input.localFolderId,
                ttl_seconds: input.ttlSeconds ?? 3600,
                max_chunks: input.maxChunks ?? 200,
                allowed_scopes: input.allowedScopes ?? ["search", "read"],
            }),
        });
        return {
            sessionId: String(payload.session_id ?? ""),
            localFolderId: String(payload.local_folder_id ?? ""),
            expiresAt: String(payload.expires_at ?? ""),
            maxChunks: typeof payload.max_chunks === "number" ? payload.max_chunks : 200,
            allowedScopes: Array.isArray(payload.allowed_scopes)
                ? payload.allowed_scopes
                : ["search", "read"],
        };
    }
    async getE2ESessionStatus(sessionId) {
        const payload = await this.request(`/daemon/e2e/sessions/${encodeURIComponent(sessionId)}`, { method: "GET" });
        return {
            sessionId: String(payload.session_id ?? ""),
            localFolderId: String(payload.local_folder_id ?? ""),
            status: String(payload.status ?? ""),
            expiresAt: String(payload.expires_at ?? ""),
            chunksUsed: typeof payload.chunks_used === "number" ? payload.chunks_used : 0,
            maxChunks: typeof payload.max_chunks === "number" ? payload.max_chunks : 0,
            allowedScopes: Array.isArray(payload.allowed_scopes)
                ? payload.allowed_scopes
                : [],
        };
    }
    async decryptE2EChunks(sessionId, chunkIds) {
        const payload = await this.request("/daemon/e2e/decrypt", {
            method: "POST",
            body: {
                session_id: sessionId,
                chunk_ids: chunkIds,
            },
        });
        const rawChunks = Array.isArray(payload.chunks) ? payload.chunks : [];
        const chunks = rawChunks.map((c) => ({
            chunkId: String(c.chunk_id ?? ""),
            plaintext: String(c.plaintext ?? ""),
            encrypted: typeof c.encrypted === "boolean" ? c.encrypted : true,
            metadata: isRecord(c.metadata) ? c.metadata : null,
        }));
        return {
            sessionId: String(payload.session_id ?? ""),
            chunks,
            chunksRemaining: typeof payload.chunks_remaining === "number"
                ? payload.chunks_remaining
                : 0,
        };
    }
    async embed(texts, inputType = "document") {
        const payload = await this.request("/daemon/embed", {
            method: "POST",
            body: { texts, input_type: inputType },
        });
        return {
            embeddings: Array.isArray(payload.embeddings)
                ? payload.embeddings
                : [],
            model: String(payload.model ?? "zembed-1"),
            dimension: typeof payload.dimension === "number" ? payload.dimension : 2560,
        };
    }
}
export class OracleClient {
    retry;
    apiKey;
    baseUrl;
    constructor(retry, apiKey, baseUrl) {
        this.retry = retry;
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    createJob(payload) {
        return withRetries(() => DefaultService.createOracleJobV2OracleJobsPost(payload), this.retry);
    }
    getJob(jobId) {
        return withRetries(() => DefaultService.getOracleJobV2OracleJobsJobIdGet(jobId), this.retry);
    }
    async waitForJob(jobId, timeoutMs = 600_000, pollIntervalMs = 2_000) {
        const deadline = Date.now() + timeoutMs;
        while (Date.now() < deadline) {
            const job = (await this.getJob(jobId));
            const status = String(job.status ?? "");
            if (TERMINAL_JOB_STATUSES.has(status))
                return job;
            await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
        }
        throw new NiaTimeoutError(`Oracle job ${jobId} did not reach terminal status within ${timeoutMs}ms`);
    }
    async *streamJob(jobId) {
        const response = await fetch(`${this.baseUrl}/oracle/jobs/${encodeURIComponent(jobId)}/stream`, {
            headers: { Authorization: `Bearer ${this.apiKey}` },
        });
        if (!response.ok || !response.body)
            throw new Error(`Failed to stream Oracle job: ${response.status}`);
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        while (true) {
            const { done, value } = await reader.read();
            if (done)
                break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";
            for (const line of lines) {
                if (!line.startsWith("data: "))
                    continue;
                const payload = line.slice(6).trim();
                if (!payload)
                    continue;
                try {
                    yield JSON.parse(payload);
                }
                catch {
                    continue;
                }
            }
        }
    }
}
export class NiaSDK {
    search;
    sources;
    daemon;
    oracle;
    constructor(options) {
        const retry = {
            maxRetries: options.maxRetries ?? 2,
            initialBackoffMs: options.initialBackoffMs ?? 500,
        };
        const baseUrl = options.baseUrl ?? "https://apigcp.trynia.ai/v2";
        OpenAPI.BASE = baseUrl;
        OpenAPI.TOKEN = options.apiKey;
        this.search = new SearchClient(retry);
        this.sources = new SourcesClient(retry);
        this.daemon = new DaemonClient(retry, options.apiKey, baseUrl);
        this.oracle = new OracleClient(retry, options.apiKey, baseUrl);
    }
}
