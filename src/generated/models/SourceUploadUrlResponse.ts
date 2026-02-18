/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SourceUploadUrlResponse = {
    /**
     * Signed URL for direct upload (HTTP PUT)
     */
    upload_url: string;
    /**
     * GCS path to pass to create-source payload
     */
    gcs_path: string;
    /**
     * Signed URL expiration in seconds
     */
    expires_in_seconds: number;
};

