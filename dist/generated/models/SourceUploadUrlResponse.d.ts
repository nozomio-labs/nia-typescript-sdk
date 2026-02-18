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
