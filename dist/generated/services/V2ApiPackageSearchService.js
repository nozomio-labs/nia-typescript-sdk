import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiPackageSearchService {
    /**
     * Grep package source
     * Regex search over public package source code (npm, PyPI, crates.io, Go modules).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchGrepV2V2PackageSearchGrepPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/package-search/grep',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Semantic package search
     * Hybrid semantic + keyword search over package source. 1-5 natural language queries.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchHybridV2V2PackageSearchHybridPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/package-search/hybrid',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read package file
     * Read specific lines from a package source file. Max 200 lines per request.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchReadFileV2V2PackageSearchReadFilePost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/package-search/read-file',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
