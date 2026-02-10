/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Usage breakdown for a single operation type.
 */
export type UsageSummaryUsageEntry = {
    /**
     * Number of operations used this period
     */
    used?: number;
    /**
     * Maximum allowed operations (0 if unlimited)
     */
    limit?: number;
    /**
     * Whether this operation type is unlimited
     */
    unlimited?: boolean;
};

