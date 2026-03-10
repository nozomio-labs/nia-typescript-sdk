import type { SourceAnnotation } from './SourceAnnotation';
import type { SourceCuratedOverlay } from './SourceCuratedOverlay';
import type { SourceTrustSignals } from './SourceTrustSignals';
/**
 * Full curation state for a source.
 */
export type SourceCurationResponse = {
    /**
     * Source identifier
     */
    source_id: string;
    /**
     * Source type
     */
    source_type: 'repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder' | 'slack' | 'google_drive';
    /**
     * Derived trust signals
     */
    trust_signals?: SourceTrustSignals;
    /**
     * Curated overlay if present
     */
    overlay?: (SourceCuratedOverlay | null);
    /**
     * Saved annotations for the source
     */
    annotations?: Array<SourceAnnotation>;
    /**
     * Curation record creation timestamp (ISO)
     */
    created_at?: (string | null);
    /**
     * Curation record update timestamp (ISO)
     */
    updated_at?: (string | null);
};
