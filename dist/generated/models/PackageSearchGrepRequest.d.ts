/**
 * Request model for package grep search
 */
export type PackageSearchGrepRequest = {
    /**
     * Registry: crates_io, golang_proxy, npm, py_pi, or ruby_gems
     */
    registry: string;
    /**
     * Package name
     */
    package_name: string;
    /**
     * Regex pattern to search
     */
    pattern: string;
    /**
     * Package version
     */
    version?: (string | null);
    /**
     * Language filter
     */
    language?: (string | null);
    /**
     * File SHA256 filter
     */
    filename_sha256?: (string | null);
    /**
     * Lines after match
     */
    'a'?: (number | null);
    /**
     * Lines before match
     */
    'b'?: (number | null);
    /**
     * Lines before and after match
     */
    'c'?: (number | null);
    /**
     * Limit results
     */
    head_limit?: (number | null);
    /**
     * Output mode: content, files_with_matches, or count
     */
    output_mode?: string;
};
