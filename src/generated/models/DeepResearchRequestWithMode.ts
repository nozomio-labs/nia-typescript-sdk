/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeepResearchRequestWithMode = {
    /**
     * Research question
     */
    query: string;
    /**
     * Optional structure hint
     */
    output_format?: (string | null);
    /**
     * Include verbose trace output
     */
    verbose?: boolean;
    /**
     * Search mode discriminator
     */
    mode?: string;
};

