/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Structured high-confidence guidance layered on top of a source.
 */
export type SourceCuratedOverlay = {
    /**
     * Overlay provenance
     */
    kind?: 'custom' | 'nia_verified';
    /**
     * Short high-confidence summary for the source
     */
    summary: string;
    /**
     * Longer coding-agent guidance or caveats
     */
    guidance?: (string | null);
    /**
     * Suggested follow-up prompts for agents
     */
    recommended_queries?: Array<string>;
    /**
     * Last overlay update timestamp (ISO)
     */
    updated_at?: (string | null);
};

