/**
 * Filters for Slack message search within query endpoint.
 */
export type SlackSearchFilters = {
    /**
     * Filter by channel names or IDs
     */
    channels?: (Array<string> | null);
    /**
     * Filter by Slack user names or IDs
     */
    users?: (Array<string> | null);
    /**
     * Oldest message timestamp (ISO 8601)
     */
    date_from?: (string | null);
    /**
     * Newest message timestamp (ISO 8601)
     */
    date_to?: (string | null);
    /**
     * Include threaded messages in results
     */
    include_threads?: boolean;
};
