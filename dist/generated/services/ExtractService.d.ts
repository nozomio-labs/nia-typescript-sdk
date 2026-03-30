import type { DetectRequest } from '../models/DetectRequest';
import type { DetectResponse } from '../models/DetectResponse';
import type { EngineeringExtractRequest } from '../models/EngineeringExtractRequest';
import type { EngineeringExtractResponse } from '../models/EngineeringExtractResponse';
import type { EngineeringQueryRequest } from '../models/EngineeringQueryRequest';
import type { ExtractRequest } from '../models/ExtractRequest';
import type { ExtractResponse } from '../models/ExtractResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ExtractService {
    /**
     * Start Extraction
     * @param requestBody
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    static startExtractionV2ExtractPost(requestBody: ExtractRequest): CancelablePromise<ExtractResponse>;
    /**
     * Start Detect Extraction
     * @param requestBody
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    static startDetectExtractionV2ExtractDetectPost(requestBody: DetectRequest): CancelablePromise<DetectResponse>;
    /**
     * Get Detect Extraction
     * @param extractionId
     * @returns DetectResponse Successful Response
     * @throws ApiError
     */
    static getDetectExtractionV2ExtractDetectExtractionIdGet(extractionId: string): CancelablePromise<DetectResponse>;
    /**
     * Get Detect Page Image
     * @param extractionId
     * @param pageNumber
     * @returns any Successful Response
     * @throws ApiError
     */
    static getDetectPageImageV2ExtractDetectExtractionIdPagePageNumberImageGet(extractionId: string, pageNumber: number): CancelablePromise<any>;
    /**
     * Start Engineering Extraction
     * @param requestBody
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    static startEngineeringExtractionV2ExtractEngineeringPost(requestBody: EngineeringExtractRequest): CancelablePromise<EngineeringExtractResponse>;
    /**
     * Get Engineering Extraction
     * @param extractionId
     * @returns EngineeringExtractResponse Successful Response
     * @throws ApiError
     */
    static getEngineeringExtractionV2ExtractEngineeringExtractionIdGet(extractionId: string): CancelablePromise<EngineeringExtractResponse>;
    /**
     * Query Engineering Extraction
     * @param extractionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    static queryEngineeringExtractionV2ExtractEngineeringExtractionIdQueryPost(extractionId: string, requestBody: EngineeringQueryRequest): CancelablePromise<any>;
    /**
     * Get Extraction
     * @param extractionId
     * @returns ExtractResponse Successful Response
     * @throws ApiError
     */
    static getExtractionV2ExtractExtractionIdGet(extractionId: string): CancelablePromise<ExtractResponse>;
    /**
     * List Extractions
     * @param type Filter by type: table or engineering
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static listExtractionsV2ExtractionsGet(type?: (string | null), limit?: number, offset?: number): CancelablePromise<any>;
}
