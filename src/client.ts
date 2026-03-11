import {
  DefaultService,
  OpenAPI,
  V2ApiSearchService,
  V2ApiSourcesService,
} from "./generated";
import type {
  CreateDaemonSourceInput,
  CreateDaemonSourceResult,
  CreateE2ESessionInput,
  DaemonResyncResult,
  DaemonSimpleResponse,
  DaemonSource,
  DaemonSyncFile,
  DaemonSyncFilters,
  DaemonSyncResult,
  E2EDecryptedChunk,
  E2EDecryptResult,
  E2ESession,
  E2ESessionStatus,
  E2ESyncChunk,
  E2ESyncResult,
  PushDaemonSyncInput,
  PushE2ESyncInput,
  ReportDaemonErrorInput,
} from "./daemon-types";
import { NiaTimeoutError } from "./errors";
import { RetryConfig, withRetries } from "./retry";

const TERMINAL_JOB_STATUSES = new Set(["completed", "failed", "cancelled"]);

function stripTrailingSlashes(value: string): string {
  return value.replace(/\/+$/, "");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function removeUndefined<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as T;
}

function toOptionalString(value: unknown): string | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  return typeof value === "string" ? value : String(value);
}

function toStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.map((entry) => String(entry));
}

function toDaemonSyncFiltersPayload(
  filters?: DaemonSyncFilters | null,
): Record<string, unknown> | null | undefined {
  if (filters === undefined) return undefined;
  if (filters === null) return null;

  return removeUndefined({
    contact_ids: filters.contactIds,
    conversation_ids: filters.conversationIds,
    sender_roles: filters.senderRoles,
    time_after: filters.timeAfter,
    time_before: filters.timeBefore,
    backfill_days: filters.backfillDays,
  });
}

function fromDaemonSyncFiltersPayload(
  filters: unknown,
): DaemonSyncFilters | null | undefined {
  if (filters === undefined) return undefined;
  if (filters === null) return null;
  if (!isRecord(filters)) return undefined;

  return removeUndefined({
    contactIds: toStringArray(filters.contact_ids),
    conversationIds: toStringArray(filters.conversation_ids),
    senderRoles: toStringArray(filters.sender_roles),
    timeAfter: toOptionalString(filters.time_after),
    timeBefore: toOptionalString(filters.time_before),
    backfillDays:
      typeof filters.backfill_days === "number"
        ? filters.backfill_days
        : undefined,
  });
}

function toDaemonSyncFilePayload(file: DaemonSyncFile): Record<string, unknown> {
  return {
    path: file.path,
    content: file.content ?? "",
    change_type: file.changeType ?? "modified",
    metadata: file.metadata ?? {},
    connector_metadata: file.connectorMetadata ?? {},
  };
}

function fromCreateDaemonSourcePayload(
  payload: unknown,
): CreateDaemonSourceResult {
  const source = isRecord(payload) ? payload : {};

  return {
    localFolderId: String(source.local_folder_id ?? ""),
    path: String(source.path ?? ""),
    displayName: String(source.display_name ?? ""),
    detectedType: toOptionalString(source.detected_type),
    status: String(source.status ?? ""),
  };
}

function fromDaemonSourcePayload(payload: unknown): DaemonSource {
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

function fromDaemonSyncPayload(payload: unknown): DaemonSyncResult {
  const response = isRecord(payload) ? payload : {};

  return {
    status: String(response.status ?? ""),
    chunksIndexed:
      typeof response.chunks_indexed === "number" ? response.chunks_indexed : 0,
    message: toOptionalString(response.message),
    idempotencyKey: toOptionalString(response.idempotency_key),
  };
}

function fromDaemonResyncPayload(payload: unknown): DaemonResyncResult {
  const response = isRecord(payload) ? payload : {};

  return {
    status: String(response.status ?? ""),
    localFolderId: String(response.local_folder_id ?? ""),
    message: toOptionalString(response.message),
  };
}

function parseDaemonResponse(text: string): unknown {
  if (!text) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function formatDaemonError(status: number, statusText: string, payload: unknown): Error {
  if (isRecord(payload) && payload.detail !== undefined)
    return new Error(
      `Daemon request failed (${status}): ${String(payload.detail)}`,
    );
  if (typeof payload === "string" && payload.trim())
    return new Error(`Daemon request failed (${status}): ${payload}`);

  return new Error(
    `Daemon request failed (${status}): ${statusText || "Unknown error"}`,
  );
}

function createDaemonIdempotencyKey(): string {
  if (
    typeof globalThis.crypto !== "undefined" &&
    typeof globalThis.crypto.randomUUID === "function"
  ) {
    return globalThis.crypto.randomUUID();
  }

  return `daemon-sync-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export interface NiaClientOptions {
  apiKey: string;
  baseUrl?: string;
  maxRetries?: number;
  initialBackoffMs?: number;
}

export class SearchClient {
  constructor(private readonly retry: RetryConfig) {}

  query(args: Record<string, unknown>) {
    return withRetries(
      () =>
        V2ApiSearchService.unifiedSearchV2V2SearchPost({
          mode: "query",
          ...args,
        } as never),
      this.retry,
    );
  }

  web(args: Record<string, unknown>) {
    return withRetries(
      () =>
        V2ApiSearchService.unifiedSearchV2V2SearchPost({
          mode: "web",
          ...args,
        } as never),
      this.retry,
    );
  }

  deep(args: Record<string, unknown>) {
    return withRetries(
      () =>
        V2ApiSearchService.unifiedSearchV2V2SearchPost({
          mode: "deep",
          ...args,
        } as never),
      this.retry,
    );
  }

  universal(args: Record<string, unknown>) {
    return withRetries(
      () =>
        V2ApiSearchService.unifiedSearchV2V2SearchPost({
          mode: "universal",
          ...args,
        } as never),
      this.retry,
    );
  }
}

export class SourcesClient {
  constructor(private readonly retry: RetryConfig) {}

  create(payload: Record<string, unknown>) {
    return withRetries(
      () => V2ApiSourcesService.createSourceV2SourcesPost(payload as never),
      this.retry,
    );
  }

  list(
    params: {
      type?:
        | "repository"
        | "documentation"
        | "research_paper"
        | "huggingface_dataset"
        | "local_folder"
        | null;
      query?: string | null;
      status?: string | null;
      categoryId?: string | null;
      limit?: number;
      offset?: number;
    } = {},
  ) {
    return withRetries(
      () =>
        V2ApiSourcesService.listSourcesV2SourcesGet(
          params.type,
          params.query,
          params.status,
          params.categoryId,
          params.limit ?? 20,
          params.offset ?? 0,
        ),
      this.retry,
    );
  }

  resolve(
    identifier: string,
    type?:
      | "repository"
      | "documentation"
      | "research_paper"
      | "huggingface_dataset"
      | "local_folder"
      | null,
  ) {
    return withRetries(
      () =>
        V2ApiSourcesService.resolveSourceV2SourcesResolveGet(identifier, type),
      this.retry,
    );
  }
}

export class DaemonClient {
  constructor(
    private readonly retry: RetryConfig,
    private readonly apiKey: string,
    private readonly baseUrl: string,
  ) {}

  private request<T>(
    path: string,
    init: {
      method: string;
      body?: Record<string, unknown> | null;
      retry?: boolean;
    },
  ) {
    const execute = async () => {
      const response = await fetch(
        `${stripTrailingSlashes(this.baseUrl)}${path}`,
        {
          method: init.method,
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
          body:
            init.body === undefined ? undefined : JSON.stringify(init.body),
        },
      );
      const payload = parseDaemonResponse(await response.text());

      if (!response.ok)
        throw formatDaemonError(response.status, response.statusText, payload);

      return payload as T;
    };

    if (init.retry === false) {
      return execute();
    }

    return withRetries(execute, this.retry);
  }

  async createSource(
    input: CreateDaemonSourceInput,
  ): Promise<CreateDaemonSourceResult> {
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

  async listSources(): Promise<DaemonSource[]> {
    const payload = await this.request<unknown[]>("/daemon/sources", {
      method: "GET",
    });

    if (!Array.isArray(payload)) return [];
    return payload.map((source) => fromDaemonSourcePayload(source));
  }

  async pushSync(input: PushDaemonSyncInput): Promise<DaemonSyncResult> {
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

  async resync(localFolderId: string): Promise<DaemonResyncResult> {
    const payload = await this.request(
      `/daemon/sources/${encodeURIComponent(localFolderId)}/resync`,
      {
        method: "POST",
      },
    );

    return fromDaemonResyncPayload(payload);
  }

  deleteSource(localFolderId: string): Promise<DaemonSimpleResponse> {
    return this.request(
      `/daemon/sources/${encodeURIComponent(localFolderId)}`,
      {
        method: "DELETE",
      },
    );
  }

  heartbeat(sourceIds: string[]): Promise<DaemonSimpleResponse> {
    return this.request("/daemon/heartbeat", {
      method: "POST",
      body: { source_ids: sourceIds },
    });
  }

  reportError(
    localFolderId: string,
    error: string | ReportDaemonErrorInput,
  ): Promise<DaemonSimpleResponse> {
    const payload =
      typeof error === "string"
        ? { error }
        : removeUndefined({
            error: error.error,
            path: error.path,
          });

    return this.request(
      `/daemon/sources/${encodeURIComponent(localFolderId)}/error`,
      {
        method: "POST",
        body: payload,
      },
    );
  }

  // ---------------------------------------------------------------------------
  // E2E Client-Indexed Methods
  // ---------------------------------------------------------------------------

  async pushE2ESync(input: PushE2ESyncInput): Promise<E2ESyncResult> {
    const idempotencyKey = input.idempotencyKey ?? createDaemonIdempotencyKey();
    const payload = await this.request<Record<string, unknown>>(
      "/daemon/e2e/sync",
      {
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
      },
    );

    return {
      status: String(payload.status ?? ""),
      chunksStored:
        typeof payload.chunks_stored === "number" ? payload.chunks_stored : 0,
      message:
        typeof payload.message === "string" ? payload.message : null,
      idempotencyKey:
        typeof payload.idempotency_key === "string"
          ? payload.idempotency_key
          : null,
    };
  }

  async createE2ESession(
    input: CreateE2ESessionInput,
  ): Promise<E2ESession> {
    const payload = await this.request<Record<string, unknown>>(
      "/daemon/e2e/sessions",
      {
        method: "POST",
        retry: false,
        body: removeUndefined({
          local_folder_id: input.localFolderId,
          ttl_seconds: input.ttlSeconds ?? 3600,
          max_chunks: input.maxChunks ?? 200,
          allowed_scopes: input.allowedScopes ?? ["search", "read"],
        }),
      },
    );

    return {
      sessionId: String(payload.session_id ?? ""),
      localFolderId: String(payload.local_folder_id ?? ""),
      expiresAt: String(payload.expires_at ?? ""),
      maxChunks:
        typeof payload.max_chunks === "number" ? payload.max_chunks : 200,
      allowedScopes: Array.isArray(payload.allowed_scopes)
        ? (payload.allowed_scopes as string[])
        : ["search", "read"],
    };
  }

  async getE2ESessionStatus(sessionId: string): Promise<E2ESessionStatus> {
    const payload = await this.request<Record<string, unknown>>(
      `/daemon/e2e/sessions/${encodeURIComponent(sessionId)}`,
      { method: "GET" },
    );

    return {
      sessionId: String(payload.session_id ?? ""),
      localFolderId: String(payload.local_folder_id ?? ""),
      status: String(payload.status ?? ""),
      expiresAt: String(payload.expires_at ?? ""),
      chunksUsed:
        typeof payload.chunks_used === "number" ? payload.chunks_used : 0,
      maxChunks:
        typeof payload.max_chunks === "number" ? payload.max_chunks : 0,
      allowedScopes: Array.isArray(payload.allowed_scopes)
        ? (payload.allowed_scopes as string[])
        : [],
    };
  }

  async decryptE2EChunks(
    sessionId: string,
    chunkIds: string[],
  ): Promise<E2EDecryptResult> {
    const payload = await this.request<Record<string, unknown>>(
      "/daemon/e2e/decrypt",
      {
        method: "POST",
        body: {
          session_id: sessionId,
          chunk_ids: chunkIds,
        },
      },
    );

    const rawChunks = Array.isArray(payload.chunks) ? payload.chunks : [];
    const chunks: E2EDecryptedChunk[] = rawChunks.map(
      (c: Record<string, unknown>) => ({
        chunkId: String(c.chunk_id ?? ""),
        plaintext: String(c.plaintext ?? ""),
        encrypted: typeof c.encrypted === "boolean" ? c.encrypted : true,
        metadata: isRecord(c.metadata) ? c.metadata : null,
      }),
    );

    return {
      sessionId: String(payload.session_id ?? ""),
      chunks,
      chunksRemaining:
        typeof payload.chunks_remaining === "number"
          ? payload.chunks_remaining
          : 0,
    };
  }

  async embed(
    texts: string[],
    inputType: "document" | "query" = "document",
  ): Promise<{ embeddings: number[][]; model: string; dimension: number }> {
    const payload = await this.request<Record<string, unknown>>(
      "/daemon/embed",
      {
        method: "POST",
        body: { texts, input_type: inputType },
      },
    );

    return {
      embeddings: Array.isArray(payload.embeddings)
        ? (payload.embeddings as number[][])
        : [],
      model: String(payload.model ?? "zembed-1"),
      dimension:
        typeof payload.dimension === "number" ? payload.dimension : 2560,
    };
  }
}

export class OracleClient {
  constructor(
    private readonly retry: RetryConfig,
    private readonly apiKey: string,
    private readonly baseUrl: string,
  ) {}

  createJob(payload: Record<string, unknown>) {
    return withRetries(
      () => DefaultService.createOracleJobV2OracleJobsPost(payload as never),
      this.retry,
    );
  }

  getJob(jobId: string) {
    return withRetries(
      () => DefaultService.getOracleJobV2OracleJobsJobIdGet(jobId),
      this.retry,
    );
  }

  async waitForJob(jobId: string, timeoutMs = 600_000, pollIntervalMs = 2_000) {
    const deadline = Date.now() + timeoutMs;

    while (Date.now() < deadline) {
      const job = (await this.getJob(jobId)) as Record<string, unknown>;
      const status = String(job.status ?? "");

      if (TERMINAL_JOB_STATUSES.has(status)) return job;
      await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
    }
    throw new NiaTimeoutError(
      `Oracle job ${jobId} did not reach terminal status within ${timeoutMs}ms`,
    );
  }

  async *streamJob(jobId: string): AsyncGenerator<Record<string, unknown>> {
    const response = await fetch(
      `${this.baseUrl}/oracle/jobs/${encodeURIComponent(jobId)}/stream`,
      {
        headers: { Authorization: `Bearer ${this.apiKey}` },
      },
    );

    if (!response.ok || !response.body)
      throw new Error(`Failed to stream Oracle job: ${response.status}`);

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");

      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const payload = line.slice(6).trim();

        if (!payload) continue;
        try {
          yield JSON.parse(payload) as Record<string, unknown>;
        } catch {
          continue;
        }
      }
    }
  }
}

export class NiaSDK {
  public readonly search: SearchClient;
  public readonly sources: SourcesClient;
  public readonly daemon: DaemonClient;
  public readonly oracle: OracleClient;

  constructor(options: NiaClientOptions) {
    const retry: RetryConfig = {
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
