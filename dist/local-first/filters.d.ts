import type { LocalIMessageMetadata, LocalIMessageSyncFilters, LocalSearchFilters } from "./types";
type FilterShape = LocalSearchFilters | LocalIMessageSyncFilters | undefined | null;
export declare function normalizeContactIdentifier(value: string | null | undefined): string;
export declare function resolveEffectiveTimeAfter(filters: FilterShape, now?: Date): string | null;
export declare function matchesIMessageFilters(metadata: Pick<LocalIMessageMetadata, "contactId" | "conversationId" | "senderRole" | "senderRoles" | "timestamp" | "timeRangeStart" | "timeRangeEnd" | "dbType" | "sourceSubtype" | "connectorType">, filters: FilterShape, now?: Date): boolean;
export {};
