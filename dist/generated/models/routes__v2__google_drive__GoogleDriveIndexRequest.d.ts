export type routes__v2__google_drive__GoogleDriveIndexRequest = {
    /**
     * Drive file IDs to index
     */
    file_ids?: Array<string>;
    /**
     * Drive folder IDs to index
     */
    folder_ids?: Array<string>;
    /**
     * Optional custom display name for the indexed Drive source
     */
    display_name?: (string | null);
};
