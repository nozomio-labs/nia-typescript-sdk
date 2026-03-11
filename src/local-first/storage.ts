import { matchesIMessageFilters } from "./filters";
import type {
  LocalSearchFilters,
  LocalSearchHit,
  LocalVectorStore,
  LocalVectorStoreRecord,
} from "./types";

function cosineSimilarity(left: number[], right: number[]): number {
  const size = Math.min(left.length, right.length);
  let dot = 0;
  let leftNorm = 0;
  let rightNorm = 0;

  for (let index = 0; index < size; index += 1) {
    const leftValue = left[index] ?? 0;
    const rightValue = right[index] ?? 0;

    dot += leftValue * rightValue;
    leftNorm += leftValue * leftValue;
    rightNorm += rightValue * rightValue;
  }

  if (!leftNorm || !rightNorm) return 0;
  return dot / (Math.sqrt(leftNorm) * Math.sqrt(rightNorm));
}

function toSearchHit(
  record: LocalVectorStoreRecord,
  score: number,
): LocalSearchHit {
  return {
    kind: "local",
    id: record.id,
    path: record.path,
    content: record.content,
    metadata: record.metadata,
    score,
  };
}

export class MemoryLocalVectorStore implements LocalVectorStore {
  private readonly records = new Map<string, LocalVectorStoreRecord>();

  async upsert(records: LocalVectorStoreRecord[]) {
    for (const record of records) {
      this.records.set(record.id, record);
    }
  }

  async search(args: {
    embedding: number[];
    topK: number;
    filters?: LocalSearchFilters;
  }) {
    const hits = [...this.records.values()]
      .filter((record) =>
        matchesIMessageFilters(record.metadata, args.filters),
      )
      .map((record) =>
        toSearchHit(record, cosineSimilarity(args.embedding, record.embedding)),
      )
      .sort((left, right) => right.score - left.score);

    return hits.slice(0, args.topK);
  }
}
