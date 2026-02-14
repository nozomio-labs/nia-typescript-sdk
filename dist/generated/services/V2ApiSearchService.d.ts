import type { DeepResearchRequestWithMode } from '../models/DeepResearchRequestWithMode';
import type { QuerySearchRequest } from '../models/QuerySearchRequest';
import type { UniversalSearchRequestWithMode } from '../models/UniversalSearchRequestWithMode';
import type { WebSearchRequestWithMode } from '../models/WebSearchRequestWithMode';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiSearchService {
    /**
     * Unified search
     * Single search endpoint with a mode discriminator.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static unifiedSearchV2V2SearchPost(requestBody: (QuerySearchRequest | WebSearchRequestWithMode | DeepResearchRequestWithMode | UniversalSearchRequestWithMode)): CancelablePromise<any>;
}
