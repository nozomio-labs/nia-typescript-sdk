export type GitHubReadRequest = {
    /**
     * Repository in owner/repo format
     */
    repository: string;
    /**
     * File path within the repository
     */
    path: string;
    /**
     * Branch, tag, or commit SHA
     */
    ref?: string;
    /**
     * 1-based start line
     */
    start_line?: (number | null);
    /**
     * 1-based end line (inclusive)
     */
    end_line?: (number | null);
};
