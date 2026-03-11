import { buildLocalIMessageSyncBatch } from "./imessage";
function toVectorStoreRecords(files, embeddings) {
    return files.map((file, index) => ({
        id: file.path,
        path: file.path,
        content: file.content,
        metadata: file.metadata,
        embedding: embeddings[index] ?? [],
    }));
}
export async function indexLocalIMessageBatch({ rows, embedder, vectorStore, cursor, filters, contactLookup, now, windowMinutes, }) {
    const batch = buildLocalIMessageSyncBatch({
        rows,
        cursor,
        filters,
        contactLookup,
        now,
        windowMinutes,
    });
    if (!batch.files.length) {
        return {
            ...batch,
            indexed: 0,
        };
    }
    const embeddings = await embedder.embedDocuments(batch.files.map((file) => file.content));
    const records = toVectorStoreRecords(batch.files, embeddings);
    await vectorStore.upsert(records);
    return {
        ...batch,
        indexed: records.length,
    };
}
