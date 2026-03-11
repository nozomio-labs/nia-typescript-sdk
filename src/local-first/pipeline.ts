import { buildLocalIMessageSyncBatch } from "./imessage";
import type {
  LocalEmbeddingProvider,
  LocalIMessageCursor,
  LocalIMessageFile,
  LocalIMessageIndexResult,
  LocalIMessageRow,
  LocalIMessageSyncFilters,
  LocalVectorStore,
  LocalVectorStoreRecord,
} from "./types";

interface IndexLocalIMessageBatchArgs {
  rows: LocalIMessageRow[];
  embedder: LocalEmbeddingProvider;
  vectorStore: LocalVectorStore;
  cursor?: LocalIMessageCursor;
  filters?: LocalIMessageSyncFilters;
  contactLookup?: Record<string, string>;
  now?: Date;
  windowMinutes?: number;
}

function toVectorStoreRecords(
  files: LocalIMessageFile[],
  embeddings: number[][],
): LocalVectorStoreRecord[] {
  return files.map((file, index) => ({
    id: file.path,
    path: file.path,
    content: file.content,
    metadata: file.metadata,
    embedding: embeddings[index] ?? [],
  }));
}

export async function indexLocalIMessageBatch({
  rows,
  embedder,
  vectorStore,
  cursor,
  filters,
  contactLookup,
  now,
  windowMinutes,
}: IndexLocalIMessageBatchArgs): Promise<LocalIMessageIndexResult> {
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

  const embeddings = await embedder.embedDocuments(
    batch.files.map((file) => file.content),
  );
  const records = toVectorStoreRecords(batch.files, embeddings);

  await vectorStore.upsert(records);

  return {
    ...batch,
    indexed: records.length,
  };
}
