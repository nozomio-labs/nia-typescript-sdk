/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsageSummaryUsageEntry } from './UsageSummaryUsageEntry';
/**
 * Response for usage summary.
 */
export type UsageSummaryResponse = {
    /**
     * User identifier
     */
    user_id: string;
    /**
     * Organization identifier (if applicable)
     */
    organization_id?: (string | null);
    /**
     * Current subscription tier
     */
    subscription_tier?: string;
    /**
     * Start of current billing period
     */
    billing_period_start: string;
    /**
     * End of current billing period
     */
    billing_period_end: string;
    /**
     * Usage breakdown by operation type
     */
    usage?: Record<string, UsageSummaryUsageEntry>;
};

