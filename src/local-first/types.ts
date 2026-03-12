import type { LocalSourceFilters, QuerySearchRequest } from "../generated";

export type LocalIMessageSenderRole = "self" | "contact";

export interface LocalFirstRuntimeProfile {
  id: "sqlite-vec" | "chroma";
  embedding: {
    kind: "transformers.js";
    locality: "on-device";
  };
  vectorStore: {
    kind: "sqlite-vec" | "chroma";
    locality: "on-device";
  };
  processModel: "embedded" | "sidecar";
  packagingTradeoffs: string;
}

export interface LocalIMessageRow {
  rowId: number;
  text?: string | null;
  attributedBodyText?: string | null;
  appleDate?: number | null;
  isFromMe?: boolean;
  service?: string | null;
  threadOriginatorGuid?: string | null;
  contactId?: string | null;
  contactDisplay?: string | null;
}

export interface LocalIMessageCursor {
  lastRowId?: number;
  lastTimestamp?: number;
}

export interface LocalIMessageSyncFilters {
  contactIds?: string[];
  conversationIds?: string[];
  senderRoles?: LocalIMessageSenderRole[];
  timeAfter?: string | null;
  timeBefore?: string | null;
  backfillDays?: number | null;
  dbType?: string | null;
  sourceSubtype?: string | null;
  connectorType?: string | null;
}

export interface LocalSearchFilters {
  contactIds?: string[];
  conversationIds?: string[];
  senderRoles?: LocalIMessageSenderRole[];
  timeAfter?: string | null;
  timeBefore?: string | null;
  dbType?: string | null;
  sourceSubtype?: string | null;
  connectorType?: string | null;
}

export interface LocalIMessageMetadata {
  dbType: "imessage";
  sourceSubtype: "database";
  connectorType: "imessage";
  db_type?: "imessage";
  source_subtype?: "database";
  connector_type?: "imessage";
  rowId: number;
  timestamp: string | null;
  contact: string;
  contactId: string;
  contact_id?: string;
  conversationId: string;
  conversation_id?: string;
  senderRole: LocalIMessageSenderRole;
  sender_role?: LocalIMessageSenderRole;
  senderRoles?: LocalIMessageSenderRole[];
  sender_roles?: LocalIMessageSenderRole[];
  isFromMe: boolean;
  service?: string | null;
  threadId?: string | null;
  participants?: string[];
  messageCount?: number;
  message_count?: number;
  timeRangeStart?: string | null;
  timeRangeEnd?: string | null;
  time_range_start?: string | null;
  time_range_end?: string | null;
  isConversationChunk?: boolean;
  is_conversation_chunk?: boolean;
}

export interface LocalIMessageFile {
  path: string;
  content: string;
  metadata: LocalIMessageMetadata;
}

export interface LocalIMessageSyncBatch {
  files: LocalIMessageFile[];
  cursor: Required<LocalIMessageCursor>;
  stats: {
    extracted: number;
    chunks: number;
    dbType: "imessage";
  };
}

export interface LocalVectorStoreRecord {
  id: string;
  path: string;
  content: string;
  metadata: LocalIMessageMetadata;
  embedding: number[];
}

export interface LocalSearchHit {
  kind: "local";
  id: string;
  path: string;
  content: string;
  metadata: LocalIMessageMetadata;
  score: number;
}

export interface CloudSearchHit {
  kind: "cloud";
  id: string;
  content: string;
  score: number;
  sourceType?: string;
  metadata?: Record<string, unknown>;
}

export type HybridSearchHit = LocalSearchHit | CloudSearchHit;

export interface LocalEmbeddingProvider {
  embedDocuments(texts: string[]): Promise<number[][]>;
  embedQuery(text: string): Promise<number[]>;
}

export interface LocalVectorStore {
  upsert(records: LocalVectorStoreRecord[]): Promise<void>;
  search(args: {
    embedding: number[];
    topK: number;
    filters?: LocalSearchFilters;
  }): Promise<LocalSearchHit[]>;
}

export interface LocalIMessageIndexResult extends LocalIMessageSyncBatch {
  indexed: number;
}

export type CloudSearchExecutor = (
  request: QuerySearchRequest,
) => Promise<CloudSearchHit[]>;

export interface HybridSearchResult {
  localHits: LocalSearchHit[];
  cloudHits: CloudSearchHit[];
  fusedHits: Array<HybridSearchHit & { fusedScore: number }>;
  cloudRequest: QuerySearchRequest;
}

export interface HybridSearchArgs {
  query: string;
  messages: QuerySearchRequest["messages"];
  repositories?: QuerySearchRequest["repositories"];
  dataSources?: QuerySearchRequest["data_sources"];
  localSourceFilters?: LocalSourceFilters | null;
  cloudSearch: CloudSearchExecutor;
  embedder: LocalEmbeddingProvider;
  vectorStore: LocalVectorStore;
  topK?: number;
}
