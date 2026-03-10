/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SourceCurationUpdateRequest = {
    /**
     * Trust preference for this source
     */
    trust_level?: ('low' | 'medium' | 'high' | null);
    /**
     * Overlay provenance
     */
    overlay_kind?: ('custom' | 'nia_verified' | null);
    /**
     * Short curated source summary
     */
    overlay_summary?: (string | null);
    /**
     * Longer guidance for coding agents
     */
    overlay_guidance?: (string | null);
    /**
     * Suggested prompts for this source
     */
    recommended_queries?: (Array<string> | null);
    /**
     * Remove any existing curated overlay
     */
    clear_overlay?: boolean;
};

