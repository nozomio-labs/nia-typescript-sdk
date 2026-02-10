export type GitHubSearchRequest = {
    /**
     * Code search query
     */
    query: string;
    /**
     * Repository in owner/repo format
     */
    repository: string;
    /**
     * Results per page
     */
    per_page?: number;
    /**
     * Page number
     */
    page?: number;
};
