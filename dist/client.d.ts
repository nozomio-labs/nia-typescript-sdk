import { RetryConfig } from "./retry";
export interface NiaClientOptions {
    apiKey: string;
    baseUrl?: string;
    maxRetries?: number;
    initialBackoffMs?: number;
}
export declare class SearchClient {
    private readonly retry;
    constructor(retry: RetryConfig);
    query(args: Record<string, unknown>): Promise<any>;
    web(args: Record<string, unknown>): Promise<any>;
    deep(args: Record<string, unknown>): Promise<any>;
    universal(args: Record<string, unknown>): Promise<any>;
}
export declare class SourcesClient {
    private readonly retry;
    constructor(retry: RetryConfig);
    create(payload: Record<string, unknown>): Promise<import("./generated").Source>;
    list(params?: {
        type?: "repository" | "documentation" | "research_paper" | "huggingface_dataset" | "local_folder" | null;
        query?: string | null;
        status?: string | null;
        categoryId?: string | null;
        limit?: number;
        offset?: number;
    }): Promise<import("./generated").SourceListResponse>;
    resolve(identifier: string, type?: "repository" | "documentation" | "research_paper" | "huggingface_dataset" | "local_folder" | null): Promise<import("./generated").SourceResolveResponse>;
}
export declare class OracleClient {
    private readonly retry;
    private readonly apiKey;
    private readonly baseUrl;
    constructor(retry: RetryConfig, apiKey: string, baseUrl: string);
    createJob(payload: Record<string, unknown>): Promise<any>;
    getJob(jobId: string): Promise<any>;
    waitForJob(jobId: string, timeoutMs?: number, pollIntervalMs?: number): Promise<Record<string, unknown>>;
    streamJob(jobId: string): AsyncGenerator<Record<string, unknown>>;
}
export declare class NiaSDK {
    readonly search: SearchClient;
    readonly sources: SourcesClient;
    readonly oracle: OracleClient;
    constructor(options: NiaClientOptions);
}
