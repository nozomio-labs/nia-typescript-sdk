/**
 * E2E sync orchestrator: plaintext chunk -> embed -> encrypt -> upload.
 *
 * This module ties together the encryption, blind-index, and embedding
 * layers into a single pipeline that produces E2ESyncChunk payloads
 * ready for `DaemonClient.pushE2ESync()`.
 */
import { encryptToBase64 } from "./encryption";
import { generateBlindIndexTokens, hashIdentifier } from "./blind-index";
import { DEFAULT_EMBEDDING_PROFILE, } from "./embedding-profile";
export async function buildE2ESyncBatch({ chunks, encryptionKey, blindIndexKey, embedder, profile = DEFAULT_EMBEDDING_PROFILE, maxBlindIndexTokens = 64, }) {
    const texts = chunks.map((c) => c.content);
    const embeddings = await embedder.embedDocuments(texts);
    const syncChunks = [];
    let totalTokens = 0;
    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const embedding = embeddings[i];
        const ciphertext = await encryptToBase64(chunk.content, encryptionKey);
        const blindTokens = await generateBlindIndexTokens(chunk.content, blindIndexKey, maxBlindIndexTokens);
        totalTokens += blindTokens.length;
        const contactHash = chunk.contactId
            ? await hashIdentifier(chunk.contactId, blindIndexKey)
            : null;
        const conversationHash = chunk.conversationId
            ? await hashIdentifier(chunk.conversationId, blindIndexKey)
            : null;
        let metadataCiphertext = null;
        if (chunk.metadata && Object.keys(chunk.metadata).length > 0) {
            metadataCiphertext = await encryptToBase64(JSON.stringify(chunk.metadata), encryptionKey);
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
