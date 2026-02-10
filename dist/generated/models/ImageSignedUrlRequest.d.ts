/**
 * Request to get a signed URL for downloading an image from GCS.
 */
export type ImageSignedUrlRequest = {
    /**
     * Full GCS path (gs://bucket/path) to the image
     */
    gcs_path: string;
};
