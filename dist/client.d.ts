import type { CreateDaemonSourceInput, CreateDaemonSourceResult, CreateE2ESessionInput, DaemonResyncResult, DaemonSimpleResponse, DaemonSource, DaemonSyncResult, E2EDecryptResult, E2ESession, E2ESessionStatus, E2ESyncResult, PushDaemonSyncInput, PushE2ESyncInput, ReportDaemonErrorInput } from "./daemon-types";
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
export declare class DaemonClient {
    private readonly retry;
    private readonly apiKey;
    private readonly baseUrl;
    constructor(retry: RetryConfig, apiKey: string, baseUrl: string);
    private request;
    createSource(input: CreateDaemonSourceInput): Promise<CreateDaemonSourceResult>;
    listSources(): Promise<DaemonSource[]>;
    pushSync(input: PushDaemonSyncInput): Promise<DaemonSyncResult>;
    resync(localFolderId: string): Promise<DaemonResyncResult>;
    deleteSource(localFolderId: string): Promise<DaemonSimpleResponse>;
    heartbeat(sourceIds: string[]): Promise<DaemonSimpleResponse>;
    reportError(localFolderId: string, error: string | ReportDaemonErrorInput): Promise<DaemonSimpleResponse>;
    pushE2ESync(input: PushE2ESyncInput): Promise<E2ESyncResult>;
    createE2ESession(input: CreateE2ESessionInput): Promise<E2ESession>;
    getE2ESessionStatus(sessionId: string): Promise<E2ESessionStatus>;
    decryptE2EChunks(sessionId: string, chunkIds: string[]): Promise<E2EDecryptResult>;
    embed(texts: string[], inputType?: "document" | "query"): Promise<{
        embeddings: number[][];
        model: string;
        dimension: number;
    }>;
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
    readonly daemon: DaemonClient;
    readonly oracle: OracleClient;
    constructor(options: NiaClientOptions);
}
