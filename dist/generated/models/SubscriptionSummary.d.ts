export type SubscriptionSummary = {
    instant_access: number;
    wait_for_indexing: number;
    started_indexing: number;
    not_found: number;
    errors: number;
    skipped: number;
};
