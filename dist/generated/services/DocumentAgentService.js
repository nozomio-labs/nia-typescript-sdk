import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocumentAgentService {
    /**
     * Query document(s) with an AI agent
     * Run the full document agent against one or more indexed PDFs or documents. The agent uses tools (search, read sections, read pages) to research the document(s) and produce a comprehensive answer with citations. Supports optional structured output via json_schema.
     * @param requestBody
     * @returns DocumentQueryResponse Successful Response
     * @throws ApiError
     */
    static documentQueryV2DocumentAgentPost(requestBody) {
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
