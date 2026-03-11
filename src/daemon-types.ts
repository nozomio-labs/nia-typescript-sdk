export interface DaemonSyncFilters {
  contactIds?: string[];
  conversationIds?: string[];
  senderRoles?: string[];
  timeAfter?: string | null;
  timeBefore?: string | null;
  backfillDays?: number | null;
}

export interface CreateDaemonSourceInput {
  path: string;
  displayName?: string;
  detectedType?: string;
  syncFilters?: DaemonSyncFilters | null;
}

export interface CreateDaemonSourceResult {
  localFolderId: string;
  path: string;
  displayName: string;
  detectedType?: string | null;
  status: string;
}

export interface DaemonSource {
  localFolderId: string;
  path?: string | null;
  displayName: string;
  detectedType?: string | null;
  cursor: Record<string, unknown>;
  syncFilters?: DaemonSyncFilters | null;
  lastSynced?: string | null;
  lastSeenAt?: string | null;
  lastSyncError?: string | null;
  status: string;
  syncEnabled: boolean;
}

export interface DaemonSyncFile {
  path: string;
  content?: string;
  changeType?: "added" | "modified" | "removed" | string;
  metadata?: Record<string, unknown>;
  connectorMetadata?: Record<string, unknown>;
}

export interface PushDaemonSyncInput {
  localFolderId: string;
  files: DaemonSyncFile[];
  cursor?: Record<string, unknown>;
  stats?: Record<string, unknown>;
  isFinalBatch?: boolean;
  idempotencyKey?: string | null;
  connectorType?: string | null;
}

export interface DaemonSyncResult {
  status: string;
  chunksIndexed: number;
  message?: string | null;
  idempotencyKey?: string | null;
}

export interface DaemonResyncResult {
  status: string;
  localFolderId: string;
  message?: string | null;
}

export interface ReportDaemonErrorInput {
  error: string;
  path?: string | null;
}

export type DaemonSimpleResponse = Record<string, unknown>;


// =============================================================================
// E2E Client-Indexed Types
// =============================================================================

export interface E2ESyncChunk {
  chunkId: string;
  ciphertext: string;
  embedding: number[];
  blindIndexTokens?: string[];
  contactHash?: string | null;
  conversationHash?: string | null;
  dayBucket?: string | null;
  senderRole?: "self" | "contact" | string | null;
  metadataCiphertext?: string | null;
}

export interface PushE2ESyncInput {
  localFolderId: string;
  chunks: E2ESyncChunk[];
  embeddingProfile?: string;
  cursor?: Record<string, unknown>;
  stats?: Record<string, unknown>;
  isFinalBatch?: boolean;
  idempotencyKey?: string | null;
  connectorType?: string | null;
}

export interface E2ESyncResult {
  status: string;
  chunksStored: number;
  message?: string | null;
  idempotencyKey?: string | null;
}

export interface CreateE2ESessionInput {
  localFolderId: string;
  ttlSeconds?: number;
  maxChunks?: number;
  allowedScopes?: string[];
}

export interface E2ESession {
  sessionId: string;
  localFolderId: string;
  expiresAt: string;
  maxChunks: number;
  allowedScopes: string[];
}

export interface E2ESessionStatus {
  sessionId: string;
  localFolderId: string;
  status: "active" | "expired" | "exhausted" | string;
  expiresAt: string;
  chunksUsed: number;
  maxChunks: number;
  allowedScopes: string[];
}

export interface E2EDecryptedChunk {
  chunkId: string;
  plaintext: string;
  encrypted: boolean;
  metadata?: Record<string, unknown> | null;
}

export interface E2EDecryptResult {
  sessionId: string;
  chunks: E2EDecryptedChunk[];
  chunksRemaining: number;
}
