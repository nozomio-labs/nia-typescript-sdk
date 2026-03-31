import type { DocumentQueryRequest } from '../models/DocumentQueryRequest';
import type { DocumentQueryResponse } from '../models/DocumentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DocumentAgentService {
    /**
     * Query document(s) with an AI agent
     * Run the full document agent against one or more indexed PDFs or documents. The agent uses tools (search, read sections, read pages) to research the document(s) and produce a comprehensive answer with citations. Supports optional structured output via json_schema.
     * @param requestBody
     * @returns DocumentQueryResponse Successful Response
     * @throws ApiError
     */
    static documentQueryV2DocumentAgentPost(requestBody: DocumentQueryRequest): CancelablePromise<DocumentQueryResponse>;
}
