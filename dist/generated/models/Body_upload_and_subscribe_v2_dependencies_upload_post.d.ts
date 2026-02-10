export type Body_upload_and_subscribe_v2_dependencies_upload_post = {
    /**
     * Manifest file to upload
     */
    file: Blob;
    /**
     * Include dev dependencies
     */
    include_dev_dependencies?: boolean;
    /**
     * Max new indexes to start
     */
    max_new_indexes?: number;
};
