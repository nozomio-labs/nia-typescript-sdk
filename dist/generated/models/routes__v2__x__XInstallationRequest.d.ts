export type routes__v2__x__XInstallationRequest = {
    /**
     * X username to index (with or without @)
     */
    username: string;
    /**
     * X API bearer token
     */
    bearer_token: string;
    /**
     * Optional custom display name for this source
     */
    display_name?: (string | null);
    /**
     * Maximum number of recent posts to index
     */
    max_results?: number;
    /**
     * Whether replies should be indexed
     */
    include_replies?: boolean;
    /**
     * Whether reposts/retweets should be indexed
     */
    include_retweets?: boolean;
};
