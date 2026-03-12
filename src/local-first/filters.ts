import type {
  LocalIMessageMetadata,
  LocalIMessageSyncFilters,
  LocalSearchFilters,
} from "./types";

type FilterShape =
  | LocalSearchFilters
  | LocalIMessageSyncFilters
  | undefined
  | null;

function isSyncFilterShape(
  filters: FilterShape,
): filters is LocalIMessageSyncFilters {
  return Boolean(filters && "backfillDays" in filters);
}

function toIsoString(value: Date | string | null | undefined): string | null {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();

  return value;
}

function toDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  const normalizedValue = /(?:Z|[+-]\d{2}:\d{2})$/.test(value)
    ? value
    : `${value}Z`;
  const parsed = new Date(normalizedValue);

  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function normalizeContactIdentifier(
  value: string | null | undefined,
): string {
  if (!value) return "";
  const trimmed = value.trim();

  if (trimmed.includes("@")) {
    return trimmed.toLowerCase();
  }

  const digitsOnly = trimmed.replace(/\D/g, "");

  return digitsOnly || trimmed.toLowerCase();
}

function includesNormalizedValue(
  candidate: string | null | undefined,
  allowedValues: string[] | null | undefined,
): boolean {
  if (!allowedValues?.length) return true;
  const normalizedCandidate = normalizeContactIdentifier(candidate);

  return allowedValues.some(
    (value) => normalizeContactIdentifier(value) === normalizedCandidate,
  );
}

function includesExactValue(
  candidate: string | null | undefined,
  allowedValues: string[] | null | undefined,
): boolean {
  if (!allowedValues?.length) return true;

  return allowedValues.includes(candidate ?? "");
}

export function resolveEffectiveTimeAfter(
  filters: FilterShape,
  now: Date = new Date(),
): string | null {
  const explicitAfter = toIsoString(filters?.timeAfter ?? null);
  const explicitAfterDate = toDate(explicitAfter);
  const backfillDays = isSyncFilterShape(filters)
    ? filters.backfillDays
    : undefined;

  if (!backfillDays || backfillDays <= 0) {
    return explicitAfter;
  }

  const backfillAfter = new Date(
    now.getTime() - backfillDays * 24 * 60 * 60 * 1000,
  );

  if (!explicitAfterDate || backfillAfter > explicitAfterDate) {
    return backfillAfter.toISOString();
  }

  return explicitAfterDate.toISOString();
}

export function matchesIMessageFilters(
  metadata: Pick<
    LocalIMessageMetadata,
    | "contactId"
    | "conversationId"
    | "senderRole"
    | "senderRoles"
    | "timestamp"
    | "timeRangeStart"
    | "timeRangeEnd"
    | "dbType"
    | "sourceSubtype"
    | "connectorType"
  >,
  filters: FilterShape,
  now: Date = new Date(),
): boolean {
  if (!filters) return true;

  if (filters.dbType && metadata.dbType !== filters.dbType) {
    return false;
  }

  if (
    filters.sourceSubtype &&
    metadata.sourceSubtype !== filters.sourceSubtype
  ) {
    return false;
  }

  if (
    filters.connectorType &&
    metadata.connectorType !== filters.connectorType
  ) {
    return false;
  }

  if (!includesNormalizedValue(metadata.contactId, filters.contactIds)) {
    return false;
  }

  if (!includesExactValue(metadata.conversationId, filters.conversationIds)) {
    return false;
  }

  const senderRoles = metadata.senderRoles?.length
    ? metadata.senderRoles
    : [metadata.senderRole];

  if (
    filters.senderRoles?.length &&
    !filters.senderRoles.some((role) => senderRoles.includes(role))
  ) {
    return false;
  }

  const rangeStart = toDate(metadata.timeRangeStart ?? metadata.timestamp);
  const rangeEnd = toDate(metadata.timeRangeEnd ?? metadata.timestamp);
  const effectiveAfter = toDate(resolveEffectiveTimeAfter(filters, now));
  const before = toDate(toIsoString(filters.timeBefore ?? null));

  if (effectiveAfter && (!rangeEnd || rangeEnd < effectiveAfter)) {
    return false;
  }

  if (before && (!rangeStart || rangeStart > before)) {
    return false;
  }

  return true;
}
