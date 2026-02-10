/**
 * Request model for reading package file
 */
export type PackageSearchReadFileRequest = {
    /**
     * Registry: crates_io, golang_proxy, npm, py_pi, or ruby_gems
     */
    registry: string;
    /**
     * Package name
     */
    package_name: string;
    /**
     * File SHA256
     */
    filename_sha256: string;
    /**
     * Start line (1-based)
     */
    start_line: number;
    /**
     * End line (1-based)
     */
    end_line: number;
    /**
     * Package version
     */
    version?: (string | null);
};
