import type { SourceTrustSignals } from './SourceTrustSignals';
/**
 * Compact curation info embedded into source responses.
 */
export type SourceCurationSummary = {
    /**
     * Derived trust signals
     */
    trust_signals?: SourceTrustSignals;
    /**
     * Short overlay summary if one exists
     */
    overlay_summary?: (string | null);
    /**
     * Suggested prompts from the overlay
     */
    recommended_queries?: Array<string>;
};
