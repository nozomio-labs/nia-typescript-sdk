/**
 * Response containing a signed URL for image download.
 */
export type ImageSignedUrlResponse = {
    download_url: string;
    gcs_path: string;
    object_name: string;
    expires_in_seconds: number;
};
