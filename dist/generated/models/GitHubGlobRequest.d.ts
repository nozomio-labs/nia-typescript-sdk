export type GitHubGlobRequest = {
    /**
     * Repository in owner/repo format
     */
    repository: string;
    /**
     * Glob pattern (e.g., '*.py', 'src***.ts')
     */
    pattern: string;
    /**
     * Branch, tag, or commit SHA
     */
    ref?: string;
};
