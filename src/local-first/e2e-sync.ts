/**
 * E2E sync orchestrator: plaintext chunk -> embed -> encrypt -> upload.
 *
 * This module ties together the encryption, blind-index, and embedding
 * layers into a single pipeline that produces E2ESyncChunk payloads
 * ready for `DaemonClient.pushE2ESync()`.
 */

import type { E2ESyncChunk } from "../daemon-types";
import type { LocalEmbeddingProvider } from "./types";
import { encryptToBase64 } from "./encryption";
import {
  generateBlindIndexTokens,
  hashIdentifier,
} from "./blind-index";
import {
  DEFAULT_EMBEDDING_PROFILE,
  type EmbeddingProfile,
} from "./embedding-profile";

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

export async function buildE2ESyncBatch({
  chunks,
  encryptionKey,
  blindIndexKey,
  embedder,
  profile = DEFAULT_EMBEDDING_PROFILE,
  maxBlindIndexTokens = 64,
}: BuildE2ESyncBatchArgs): Promise<E2ESyncBatchResult> {
  const texts = chunks.map((c) => c.content);
  const embeddings = await embedder.embedDocuments(texts);

  const syncChunks: E2ESyncChunk[] = [];
  let totalTokens = 0;

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i]!;
    const embedding = embeddings[i]!;

    const ciphertext = await encryptToBase64(chunk.content, encryptionKey);

    const blindTokens = await generateBlindIndexTokens(
      chunk.content,
      blindIndexKey,
      maxBlindIndexTokens,
    );
    totalTokens += blindTokens.length;

    const contactHash = chunk.contactId
      ? await hashIdentifier(chunk.contactId, blindIndexKey)
      : null;

    const conversationHash = chunk.conversationId
      ? await hashIdentifier(chunk.conversationId, blindIndexKey)
      : null;

    let metadataCiphertext: string | null = null;
    if (chunk.metadata && Object.keys(chunk.metadata).length > 0) {
      metadataCiphertext = await encryptToBase64(
        JSON.stringify(chunk.metadata),
        encryptionKey,
      );
    }

    syncChunks.push({
      chunkId: chunk.chunkId,
      ciphertext,
      embedding,
      blindIndexTokens: blindTokens,
      contactHash,
      conversationHash,
      dayBucket: chunk.dayBucket,
      senderRole: chunk.senderRole,
      metadataCiphertext,
    });
  }

  return {
    syncChunks,
    embeddingProfile: profile.id,
    stats: {
      totalChunks: syncChunks.length,
      totalTokens,
    },
  };
}
