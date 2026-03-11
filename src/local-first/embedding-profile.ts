/**
 * Embedding profile management for E2E client-indexed sync.
 *
 * Ensures client-computed document embeddings and cloud-computed query
 * embeddings stay in the same vector space.
 */

export interface EmbeddingProfile {
  id: string;
  model: string;
  dimension: number;
}

export const PROFILES: Record<string, EmbeddingProfile> = {
  "zembed-1-2560": {
    id: "zembed-1-2560",
    model: "zembed-1",
    dimension: 2560,
  },
};

export const DEFAULT_EMBEDDING_PROFILE = PROFILES["zembed-1-2560"]!;

export function getEmbeddingProfile(
  profileId: string,
): EmbeddingProfile | undefined {
  return PROFILES[profileId];
}

export function validateEmbeddingDimension(
  profile: EmbeddingProfile,
  vector: number[],
): boolean {
  return vector.length === profile.dimension;
}
