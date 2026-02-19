export type DailyUsage1MResponse = {
    /**
     * Number of 1M context requests used today
     */
    used: number;
    /**
     * Daily limit for 1M context requests
     */
    limit: number;
    /**
     * Remaining 1M context requests today
     */
    remaining: number;
};
