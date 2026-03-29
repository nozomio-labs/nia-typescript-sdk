import type { DocumentQueryRequest } from '../models/DocumentQueryRequest';
import type { DocumentQueryResponse } from '../models/DocumentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DocumentAgentService {
    /**
     * Query a document with an AI agent
     * Run the full document agent against an indexed PDF or document. The agent uses tools (search, read sections, read pages) to research the document and produce a comprehensive answer with citations. Supports optional structured output via json_schema.
     * @param requestBody
     * @returns DocumentQueryResponse Successful Response
     * @throws ApiError
     */
    static documentQueryV2DocumentAgentPost(requestBody: DocumentQueryRequest): CancelablePromise<DocumentQueryResponse>;
}
