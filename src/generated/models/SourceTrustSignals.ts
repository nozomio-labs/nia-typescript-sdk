/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Trust and curation signals attached to a source.
 */
export type SourceTrustSignals = {
    /**
     * User or team trust preference for the source
     */
    trust_level?: 'low' | 'medium' | 'high';
    /**
     * Effective trust tier after derived verified/global signals
     */
    trust_tier?: 'low' | 'medium' | 'high' | 'verified';
    /**
     * Ownership scope of the source
     */
    scope?: 'private' | 'organization' | 'global';
    /**
     * Whether the source references a shared global source
     */
    is_global?: boolean;
    /**
     * Whether the source has a Nia-verified overlay
     */
    is_verified?: boolean;
    /**
     * Whether a curated overlay is attached
     */
    overlay_available?: boolean;
    /**
     * Number of saved annotations for this source
     */
    annotation_count?: number;
};

