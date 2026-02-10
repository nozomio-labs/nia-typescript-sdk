/**
 * A single item in documentation listing.
 */
export type DocLsItem = {
    /**
     * Virtual path
     */
    path: string;
    /**
     * Page title
     */
    title?: (string | null);
    /**
     * Original URL
     */
    url?: (string | null);
    /**
     * Item type
     */
    type?: string;
};
