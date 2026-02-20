/**
 * Configure which channels to index.
 */
export type routes__v2__slack__SlackChannelsConfigRequest = {
    /**
     * 'all' to index all channels, 'selected' to pick specific ones
     */
    mode?: string;
    /**
     * Channel IDs to include (when mode='selected')
     */
    include_channels?: (Array<string> | null);
    /**
     * Channel IDs to exclude
     */
    exclude_channels?: (Array<string> | null);
};
