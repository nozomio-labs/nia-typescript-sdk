import type { SubscriptionResultItem } from './SubscriptionResultItem';
export type SubscriptionResults = {
    instant_access: Array<SubscriptionResultItem>;
    wait_for_indexing: Array<SubscriptionResultItem>;
    started_indexing: Array<SubscriptionResultItem>;
    not_found: Array<SubscriptionResultItem>;
    errors: Array<SubscriptionResultItem>;
    skipped: Array<SubscriptionResultItem>;
};
