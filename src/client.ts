import {
  DefaultService,
  OpenAPI,
  V2ApiSearchService,
  V2ApiSourcesService,
} from "./generated";
import { NiaTimeoutError } from "./errors";
import { RetryConfig, withRetries } from "./retry";

const TERMINAL_JOB_STATUSES = new Set(["completed", "failed", "cancelled"]);

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
    this.oracle = new OracleClient(retry, options.apiKey, baseUrl);
  }
}
