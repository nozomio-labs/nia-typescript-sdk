/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeepResearchRequestWithMode } from '../models/DeepResearchRequestWithMode';
import type { QuerySearchRequest } from '../models/QuerySearchRequest';
import type { UniversalSearchRequestWithMode } from '../models/UniversalSearchRequestWithMode';
import type { WebSearchRequestWithMode } from '../models/WebSearchRequestWithMode';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiSearchService {
    /**
     * Unified search
     * Single search endpoint with a mode discriminator.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static unifiedSearchV2V2SearchPost(
        requestBody: (QuerySearchRequest | WebSearchRequestWithMode | DeepResearchRequestWithMode | UniversalSearchRequestWithMode),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
