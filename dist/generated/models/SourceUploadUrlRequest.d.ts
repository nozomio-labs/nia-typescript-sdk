export type SourceUploadUrlRequest = {
    /**
     * Original filename (used for storage object naming)
     */
    filename: string;
    /**
     * MIME type for upload (PDF, CSV, TSV, XLS, XLSX)
     */
    content_type?: string;
};
