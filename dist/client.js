import { DefaultService, OpenAPI, V2ApiSearchService, V2ApiSourcesService, } from "./generated";
import { NiaTimeoutError } from "./errors";
import { withRetries } from "./retry";
const TERMINAL_JOB_STATUSES = new Set(["completed", "failed", "cancelled"]);
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
        this.oracle = new OracleClient(retry, options.apiKey, baseUrl);
    }
}
