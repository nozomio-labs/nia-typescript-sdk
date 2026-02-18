export type SourceUploadUrlRequest = {
    /**
     * Original filename (used for storage object naming)
     */
    filename: string;
    /**
     * MIME type. Currently only application/pdf is supported.
     */
    content_type?: string;
};
