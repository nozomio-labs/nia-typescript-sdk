/**
 * Response model for bug reports
 */
export type BugReportResponse = {
    /**
     * Whether the bug report was submitted successfully
     */
    success: boolean;
    /**
     * Success or error message
     */
    message: string;
};
