export type RepositoryStatus = {
    repository: string;
    branch: string;
    status: string;
    progress?: Record<string, any>;
    error?: (string | null);
};
