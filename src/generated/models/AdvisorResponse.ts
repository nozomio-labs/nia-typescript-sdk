/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response model for advisor endpoint.
 */
export type AdvisorResponse = {
    /**
     * Tailored advice
     */
    advice: string;
    /**
     * Number of sources searched
     */
    sources_searched?: number;
    output_format?: string;
};

