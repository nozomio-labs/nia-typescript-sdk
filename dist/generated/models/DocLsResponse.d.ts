import type { DocLsItem } from './DocLsItem';
/**
 * Response for documentation listing.
 */
export type DocLsResponse = {
    /**
     * Whether the request succeeded
     */
    success?: boolean;
    /**
     * Current path
     */
    path: string;
    /**
     * Subdirectories at this path
     */
    directories?: Array<string>;
    /**
     * Files at this path
     */
    files?: Array<string>;
    /**
     * Total items in this path
     */
    total?: number;
    /**
     * Listed items (deprecated)
     */
    items?: (Array<DocLsItem> | null);
};
