/**
 * Single item to delete
 */
export type BulkDeleteItem = {
    /**
     * Resource ID
     */
    id: string;
    /**
     * Resource type
     */
    type: 'repository' | 'documentation' | 'research_paper' | 'context' | 'local_folder';
};
