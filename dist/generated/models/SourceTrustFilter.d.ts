/**
 * Filtering preferences for trust-aware retrieval.
 */
export type SourceTrustFilter = {
    /**
     * Only include sources at or above this effective trust tier
     */
    minimum_trust_tier?: ('low' | 'medium' | 'high' | 'verified' | null);
    /**
     * Only include Nia-verified sources
     */
    verified_only?: boolean;
    /**
     * Only include sources with curated overlays
     */
    require_overlay?: boolean;
};
