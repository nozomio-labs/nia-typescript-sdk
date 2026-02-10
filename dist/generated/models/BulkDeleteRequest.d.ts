import type { BulkDeleteItem } from './BulkDeleteItem';
/**
 * Request for bulk deletion
 */
export type BulkDeleteRequest = {
    /**
     * Items to delete
     */
    items: Array<BulkDeleteItem>;
};
