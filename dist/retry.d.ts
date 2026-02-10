export interface RetryConfig {
    maxRetries: number;
    initialBackoffMs: number;
}
export declare function withRetries<T>(fn: () => Promise<T>, config: RetryConfig): Promise<T>;
