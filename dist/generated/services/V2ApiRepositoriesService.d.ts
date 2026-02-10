import type { CodeGrepRequest } from '../models/CodeGrepRequest';
import type { CodeGrepResponse } from '../models/CodeGrepResponse';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { RenameResponse } from '../models/RenameResponse';
import type { RepositoryContentResponse } from '../models/RepositoryContentResponse';
import type { RepositoryIndexResponse } from '../models/RepositoryIndexResponse';
import type { RepositoryItem } from '../models/RepositoryItem';
import type { RepositoryRequest } from '../models/RepositoryRequest';
import type { RepositoryStatus } from '../models/RepositoryStatus';
import type { RepositoryTreeResponse } from '../models/RepositoryTreeResponse';
import type { routes__v2__repositories__RenameRequest } from '../models/routes__v2__repositories__RenameRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class V2ApiRepositoriesService {
    /**
     * List all repositories
     * List all indexed repositories for the authenticated user.
     * @param q Optional substring filter
     * @param status Optional status filter
     * @param limit Max repositories to return
     * @param offset Number of repositories to skip
     * @returns RepositoryItem Successful Response
     * @throws ApiError
     */
    static listRepositoriesV2V2RepositoriesGet(q?: (string | null), status?: (string | null), limit?: (number | null), offset?: number): CancelablePromise<Array<RepositoryItem>>;
    /**
     * Index a repository
     * Start indexing a GitHub repository. Supports folder paths like owner/repo/tree/branch/folder. Use X-GitHub-Token header for private repos.
     * @param requestBody
     * @returns RepositoryIndexResponse Successful Response
     * @throws ApiError
     */
    static indexRepositoryV2V2RepositoriesPost(requestBody: RepositoryRequest): CancelablePromise<RepositoryIndexResponse>;
    /**
     * Get repository status
     * Check the current indexing status of a repository.
     * @param repositoryId
     * @returns RepositoryStatus Successful Response
     * @throws ApiError
     */
    static getRepositoryStatusV2V2RepositoriesRepositoryIdGet(repositoryId: string): CancelablePromise<RepositoryStatus>;
    /**
     * Delete repository
     * Remove an indexed repository from your account.
     * @param repositoryId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteRepositoryV2V2RepositoriesRepositoryIdDelete(repositoryId: string): CancelablePromise<DeleteResponse>;
    /**
     * Get file content
     * Retrieve full content of a file from an indexed repository.
     * @param repositoryId
     * @param path Path to the file
     * @param branch Branch to read from
     * @param ref Git ref to read from (branch, tag, or commit)
     * @returns RepositoryContentResponse Successful Response
     * @throws ApiError
     */
    static getRepositoryContentV2V2RepositoriesRepositoryIdContentGet(repositoryId: string, path: string, branch?: (string | null), ref?: (string | null)): CancelablePromise<RepositoryContentResponse>;
    /**
     * @deprecated
     * Get Github Tree V2
     * Get the file tree directly from GitHub Trees API. DEPRECATED: Use /tree instead.
     * @param repositoryId
     * @param branch Branch to get tree from
     * @param includePaths Comma-separated paths to include
     * @param excludePaths Comma-separated paths to exclude
     * @param fileExtensions Comma-separated extensions to include
     * @param excludeExtensions Comma-separated extensions to exclude
     * @param showFullPaths Show full file paths
     * @returns any Successful Response
     * @throws ApiError
     */
    static getGithubTreeV2V2RepositoriesRepositoryIdGithubTreeGet(repositoryId: string, branch?: (string | null), includePaths?: (string | null), excludePaths?: (string | null), fileExtensions?: (string | null), excludeExtensions?: (string | null), showFullPaths?: boolean): CancelablePromise<any>;
    /**
     * Grep repository code
     * Regex search over indexed code. Exhaustive by default (searches all chunks). Supports context lines, case sensitivity, output modes.
     * @param repositoryId
     * @param requestBody
     * @returns CodeGrepResponse Successful Response
     * @throws ApiError
     */
    static grepRepositoryV2V2RepositoriesRepositoryIdGrepPost(repositoryId: string, requestBody: CodeGrepRequest): CancelablePromise<CodeGrepResponse>;
    /**
     * @deprecated
     * Get Repository Hierarchy V2
     * Get the file hierarchy for a repository.
     * @param repositoryId
     * @param includeClasses Include class names
     * @param includeMethods Include method names
     * @returns any Successful Response
     * @throws ApiError
     */
    static getRepositoryHierarchyV2V2RepositoriesRepositoryIdHierarchyGet(repositoryId: string, includeClasses?: boolean, includeMethods?: boolean): CancelablePromise<any>;
    /**
     * Rename repository
     * Update the display name of an indexed repository.
     * @param repositoryId
     * @param requestBody
     * @returns RenameResponse Successful Response
     * @throws ApiError
     */
    static renameRepositoryV2V2RepositoriesRepositoryIdRenamePatch(repositoryId: string, requestBody: routes__v2__repositories__RenameRequest): CancelablePromise<RenameResponse>;
    /**
     * Get repository tree
     * Get file tree from GitHub API. Supports path and extension filtering.
     * @param repositoryId
     * @param branch Branch to get tree for
     * @param includePaths Comma-separated paths to include
     * @param excludePaths Comma-separated paths to exclude
     * @param fileExtensions Comma-separated extensions to include
     * @param excludeExtensions Comma-separated extensions to exclude
     * @param showFullPaths Show full file paths
     * @returns RepositoryTreeResponse Successful Response
     * @throws ApiError
     */
    static getRepositoryTreeV2V2RepositoriesRepositoryIdTreeGet(repositoryId: string, branch?: (string | null), includePaths?: (string | null), excludePaths?: (string | null), fileExtensions?: (string | null), excludeExtensions?: (string | null), showFullPaths?: boolean): CancelablePromise<RepositoryTreeResponse>;
}
