/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionResultItem } from './SubscriptionResultItem';
export type SubscriptionResults = {
    instant_access: Array<SubscriptionResultItem>;
    wait_for_indexing: Array<SubscriptionResultItem>;
    started_indexing: Array<SubscriptionResultItem>;
    not_found: Array<SubscriptionResultItem>;
    errors: Array<SubscriptionResultItem>;
    skipped: Array<SubscriptionResultItem>;
};

