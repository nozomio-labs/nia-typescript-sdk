import type { SubscriptionResults } from './SubscriptionResults';
import type { SubscriptionSummary } from './SubscriptionSummary';
export type routes__v2__dependencies__SubscribeResponse = {
    manifest_type: string;
    total_dependencies: number;
    results: SubscriptionResults;
    summary: SubscriptionSummary;
};
