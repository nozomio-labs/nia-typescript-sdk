import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExtractService {
    /**
     * Start Extraction
     * @param requestBody
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    static startExtractionV2ExtractPost(requestBody) {
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
    static startDetectExtractionV2ExtractDetectPost(requestBody) {
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
    static getDetectExtractionV2ExtractDetectExtractionIdGet(extractionId) {
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
    static getDetectPageImageV2ExtractDetectExtractionIdPagePageNumberImageGet(extractionId, pageNumber) {
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
    static startEngineeringExtractionV2ExtractEngineeringPost(requestBody) {
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
    static getEngineeringExtractionV2ExtractEngineeringExtractionIdGet(extractionId) {
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
    static queryEngineeringExtractionV2ExtractEngineeringExtractionIdQueryPost(extractionId, requestBody) {
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
    static getExtractionV2ExtractExtractionIdGet(extractionId) {
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
    static listExtractionsV2ExtractionsGet(type, limit = 30, offset) {
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
