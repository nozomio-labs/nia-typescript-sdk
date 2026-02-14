import type { PackageSearchGrepRequest } from '../models/PackageSearchGrepRequest';
import type { PackageSearchHybridRequest } from '../models/PackageSearchHybridRequest';
import type { PackageSearchReadFileRequest } from '../models/PackageSearchReadFileRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiPackageSearchService {
    /**
     * Grep package source
     * Regex search over public package source code (npm, PyPI, crates.io, Go modules).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchGrepV2V2PackagesGrepPost(requestBody: PackageSearchGrepRequest): CancelablePromise<any>;
    /**
     * Read package file
     * Read specific lines from a package source file. Max 200 lines per request.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchReadFileV2V2PackagesReadPost(requestBody: PackageSearchReadFileRequest): CancelablePromise<any>;
    /**
     * Semantic package search
     * Hybrid semantic + keyword search over package source. 1-5 natural language queries.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static packageSearchHybridV2V2PackagesSearchPost(requestBody: PackageSearchHybridRequest): CancelablePromise<any>;
}
