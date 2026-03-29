export type WriteFileBody = {
    path: string;
    body: string;
    encoding?: string;
    language?: (string | null);
    headers?: (Record<string, any> | null);
};
