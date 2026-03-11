/**
 * E2E sync orchestrator: plaintext chunk -> embed -> encrypt -> upload.
 *
 * This module ties together the encryption, blind-index, and embedding
 * layers into a single pipeline that produces E2ESyncChunk payloads
 * ready for `DaemonClient.pushE2ESync()`.
 */
import type { E2ESyncChunk } from "../daemon-types";
import type { LocalEmbeddingProvider } from "./types";
import { type EmbeddingProfile } from "./embedding-profile";
export interface E2EChunkInput {
    chunkId: string;
    content: string;
    contactId?: string | null;
    conversationId?: string | null;
    dayBucket?: string | null;
    senderRole?: "self" | "contact" | null;
    metadata?: Record<string, unknown>;
}
export interface BuildE2ESyncBatchArgs {
    chunks: E2EChunkInput[];
    encryptionKey: CryptoKey;
    blindIndexKey: CryptoKey;
    embedder: LocalEmbeddingProvider;
    profile?: EmbeddingProfile;
    maxBlindIndexTokens?: number;
}
export interface E2ESyncBatchResult {
    syncChunks: E2ESyncChunk[];
    embeddingProfile: string;
    stats: {
        totalChunks: number;
        totalTokens: number;
    };
}
export declare function buildE2ESyncBatch({ chunks, encryptionKey, blindIndexKey, embedder, profile, maxBlindIndexTokens, }: BuildE2ESyncBatchArgs): Promise<E2ESyncBatchResult>;
