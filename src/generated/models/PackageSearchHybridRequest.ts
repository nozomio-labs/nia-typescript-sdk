/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request model for package hybrid search
 */
export type PackageSearchHybridRequest = {
    /**
     * Registry: crates_io, golang_proxy, npm, py_pi, or ruby_gems
     */
    registry: string;
    /**
     * Package name
     */
    package_name: string;
    /**
     * 1-5 semantic queries
     */
    semantic_queries: Array<string>;
    /**
     * Package version
     */
    version?: (string | null);
    /**
     * File SHA256 filter
     */
    filename_sha256?: (string | null);
    /**
     * Regex pattern filter
     */
    pattern?: (string | null);
    /**
     * Language filter
     */
    language?: (string | null);
};

