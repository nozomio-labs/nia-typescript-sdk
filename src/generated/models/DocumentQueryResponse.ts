/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentCitation } from './DocumentCitation';
/**
 * Response from the v2 document/agent endpoint.
 */
export type DocumentQueryResponse = {
    answer: string;
    citations?: Array<DocumentCitation>;
    structured_output?: (Record<string, any> | null);
    model: string;
    usage?: (Record<string, number> | null);
};

