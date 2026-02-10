/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
    public static listRepositoriesV2V2RepositoriesGet(
        q?: (string | null),
        status?: (string | null),
        limit?: (number | null),
        offset?: number,
    ): CancelablePromise<Array<RepositoryItem>> {
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
    public static indexRepositoryV2V2RepositoriesPost(
        requestBody: RepositoryRequest,
    ): CancelablePromise<RepositoryIndexResponse> {
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
    public static getRepositoryStatusV2V2RepositoriesRepositoryIdGet(
        repositoryId: string,
    ): CancelablePromise<RepositoryStatus> {
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
    public static deleteRepositoryV2V2RepositoriesRepositoryIdDelete(
        repositoryId: string,
    ): CancelablePromise<DeleteResponse> {
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
    public static getRepositoryContentV2V2RepositoriesRepositoryIdContentGet(
        repositoryId: string,
        path: string,
        branch?: (string | null),
        ref?: (string | null),
    ): CancelablePromise<RepositoryContentResponse> {
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
    public static getGithubTreeV2V2RepositoriesRepositoryIdGithubTreeGet(
        repositoryId: string,
        branch?: (string | null),
        includePaths?: (string | null),
        excludePaths?: (string | null),
        fileExtensions?: (string | null),
        excludeExtensions?: (string | null),
        showFullPaths: boolean = false,
    ): CancelablePromise<any> {
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
    public static grepRepositoryV2V2RepositoriesRepositoryIdGrepPost(
        repositoryId: string,
        requestBody: CodeGrepRequest,
    ): CancelablePromise<CodeGrepResponse> {
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
    public static getRepositoryHierarchyV2V2RepositoriesRepositoryIdHierarchyGet(
        repositoryId: string,
        includeClasses: boolean = true,
        includeMethods: boolean = false,
    ): CancelablePromise<any> {
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
    public static renameRepositoryV2V2RepositoriesRepositoryIdRenamePatch(
        repositoryId: string,
        requestBody: routes__v2__repositories__RenameRequest,
    ): CancelablePromise<RenameResponse> {
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
    public static getRepositoryTreeV2V2RepositoriesRepositoryIdTreeGet(
        repositoryId: string,
        branch?: (string | null),
        includePaths?: (string | null),
        excludePaths?: (string | null),
        fileExtensions?: (string | null),
        excludeExtensions?: (string | null),
        showFullPaths: boolean = false,
    ): CancelablePromise<RepositoryTreeResponse> {
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
