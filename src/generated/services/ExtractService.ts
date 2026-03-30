/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DetectRequest } from '../models/DetectRequest';
import type { DetectResponse } from '../models/DetectResponse';
import type { EngineeringExtractRequest } from '../models/EngineeringExtractRequest';
import type { EngineeringExtractResponse } from '../models/EngineeringExtractResponse';
import type { EngineeringQueryRequest } from '../models/EngineeringQueryRequest';
import type { ExtractRequest } from '../models/ExtractRequest';
import type { ExtractResponse } from '../models/ExtractResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExtractService {
    /**
     * Start Extraction
     * @param requestBody
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    public static startExtractionV2ExtractPost(
        requestBody: ExtractRequest,
    ): CancelablePromise<ExtractResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Start Detect Extraction
     * @param requestBody
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    public static startDetectExtractionV2ExtractDetectPost(
        requestBody: DetectRequest,
    ): CancelablePromise<DetectResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract/detect',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Detect Extraction
     * @param extractionId
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    public static getDetectExtractionV2ExtractDetectExtractionIdGet(
        extractionId: string,
    ): CancelablePromise<DetectResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/detect/{extraction_id}',
            path: {
                'extraction_id': extractionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Detect Page Image
     * @param extractionId
     * @param pageNumber
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getDetectPageImageV2ExtractDetectExtractionIdPagePageNumberImageGet(
        extractionId: string,
        pageNumber: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/detect/{extraction_id}/page/{page_number}/image',
            path: {
                'extraction_id': extractionId,
                'page_number': pageNumber,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Start Engineering Extraction
     * @param requestBody
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    public static startEngineeringExtractionV2ExtractEngineeringPost(
        requestBody: EngineeringExtractRequest,
    ): CancelablePromise<EngineeringExtractResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract/engineering',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Engineering Extraction
     * @param extractionId
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    public static getEngineeringExtractionV2ExtractEngineeringExtractionIdGet(
        extractionId: string,
    ): CancelablePromise<EngineeringExtractResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/engineering/{extraction_id}',
            path: {
                'extraction_id': extractionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Query Engineering Extraction
     * @param extractionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static queryEngineeringExtractionV2ExtractEngineeringExtractionIdQueryPost(
        extractionId: string,
        requestBody: EngineeringQueryRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extract/engineering/{extraction_id}/query',
            path: {
                'extraction_id': extractionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Extraction
     * @param extractionId
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    public static getExtractionV2ExtractExtractionIdGet(
        extractionId: string,
    ): CancelablePromise<ExtractResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extract/{extraction_id}',
            path: {
                'extraction_id': extractionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Extractions
     * @param type Filter by type: table or engineering
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listExtractionsV2ExtractionsGet(
        type?: (string | null),
        limit: number = 30,
        offset?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/extractions',
            query: {
                'type': type,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
