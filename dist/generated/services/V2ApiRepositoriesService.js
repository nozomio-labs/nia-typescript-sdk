import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApiRepositoriesService {
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
    static listRepositoriesV2V2RepositoriesGet(q, status, limit, offset) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories',
            query: {
                'q': q,
                'status': status,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Index a repository
     * Start indexing a GitHub repository. Supports folder paths like owner/repo/tree/branch/folder. Use X-GitHub-Token header for private repos.
     * @param requestBody
     * @returns RepositoryIndexResponse Successful Response
     * @throws ApiError
     */
    static indexRepositoryV2V2RepositoriesPost(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repositories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get repository status
     * Check the current indexing status of a repository.
     * @param repositoryId
     * @returns RepositoryStatus Successful Response
     * @throws ApiError
     */
    static getRepositoryStatusV2V2RepositoriesRepositoryIdGet(repositoryId) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}',
            path: {
                'repository_id': repositoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete repository
     * Remove an indexed repository from your account.
     * @param repositoryId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteRepositoryV2V2RepositoriesRepositoryIdDelete(repositoryId) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repositories/{repository_id}',
            path: {
                'repository_id': repositoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static getRepositoryContentV2V2RepositoriesRepositoryIdContentGet(repositoryId, path, branch, ref) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/content',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'path': path,
                'branch': branch,
                'ref': ref,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static getGithubTreeV2V2RepositoriesRepositoryIdGithubTreeGet(repositoryId, branch, includePaths, excludePaths, fileExtensions, excludeExtensions, showFullPaths = false) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/github-tree',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'branch': branch,
                'include_paths': includePaths,
                'exclude_paths': excludePaths,
                'file_extensions': fileExtensions,
                'exclude_extensions': excludeExtensions,
                'show_full_paths': showFullPaths,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Grep repository code
     * Regex search over indexed code. Exhaustive by default (searches all chunks). Supports context lines, case sensitivity, output modes.
     * @param repositoryId
     * @param requestBody
     * @returns CodeGrepResponse Successful Response
     * @throws ApiError
     */
    static grepRepositoryV2V2RepositoriesRepositoryIdGrepPost(repositoryId, requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repositories/{repository_id}/grep',
            path: {
                'repository_id': repositoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static getRepositoryHierarchyV2V2RepositoriesRepositoryIdHierarchyGet(repositoryId, includeClasses = true, includeMethods = false) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/hierarchy',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'include_classes': includeClasses,
                'include_methods': includeMethods,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Rename repository
     * Update the display name of an indexed repository.
     * @param repositoryId
     * @param requestBody
     * @returns RenameResponse Successful Response
     * @throws ApiError
     */
    static renameRepositoryV2V2RepositoriesRepositoryIdRenamePatch(repositoryId, requestBody) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repositories/{repository_id}/rename',
            path: {
                'repository_id': repositoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    static getRepositoryTreeV2V2RepositoriesRepositoryIdTreeGet(repositoryId, branch, includePaths, excludePaths, fileExtensions, excludeExtensions, showFullPaths = false) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{repository_id}/tree',
            path: {
                'repository_id': repositoryId,
            },
            query: {
                'branch': branch,
                'include_paths': includePaths,
                'exclude_paths': excludePaths,
                'file_extensions': fileExtensions,
                'exclude_extensions': excludeExtensions,
                'show_full_paths': showFullPaths,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
