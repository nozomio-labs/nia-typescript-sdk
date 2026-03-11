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
export declare const PROFILES: Record<string, EmbeddingProfile>;
export declare const DEFAULT_EMBEDDING_PROFILE: EmbeddingProfile;
export declare function getEmbeddingProfile(profileId: string): EmbeddingProfile | undefined;
export declare function validateEmbeddingDimension(profile: EmbeddingProfile, vector: number[]): boolean;
