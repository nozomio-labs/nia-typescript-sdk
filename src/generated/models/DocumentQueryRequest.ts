/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request for the v2 document/agent endpoint.
 */
export type DocumentQueryRequest = {
    /**
     * Data source ID of the indexed document
     */
    source_id: string;
    /**
     * Question to ask about the document
     */
    query: string;
    /**
     * JSON Schema for structured output
     */
    json_schema?: (Record<string, any> | null);
    /**
     * Model to use (claude-opus-4-6-1m, claude-opus-4-6, claude-sonnet-4-5-20250929, etc.)
     */
    model?: string;
    /**
     * Enable extended thinking
     */
    thinking_enabled?: boolean;
    /**
     * Token budget for thinking (ignored for adaptive models like Opus 4.6)
     */
    thinking_budget?: number;
    /**
     * Stream response as SSE events
     */
    stream?: boolean;
};

