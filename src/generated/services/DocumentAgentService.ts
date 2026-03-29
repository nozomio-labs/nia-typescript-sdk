/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentQueryRequest } from '../models/DocumentQueryRequest';
import type { DocumentQueryResponse } from '../models/DocumentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocumentAgentService {
    /**
     * Query a document with an AI agent
     * Run the full document agent against an indexed PDF or document. The agent uses tools (search, read sections, read pages) to research the document and produce a comprehensive answer with citations. Supports optional structured output via json_schema.
     * @param requestBody
     * @returns DocumentQueryResponse Successful Response
     * @throws ApiError
     */
    public static documentQueryV2DocumentAgentPost(
        requestBody: DocumentQueryRequest,
    ): CancelablePromise<DocumentQueryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/document/agent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
