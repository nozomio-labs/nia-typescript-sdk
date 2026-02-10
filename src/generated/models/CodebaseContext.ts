/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Structured codebase context from the user.
 */
export type CodebaseContext = {
    /**
     * Map of file_path -> file_content
     */
    files?: Record<string, string>;
    /**
     * Directory structure (from tree command or similar)
     */
    file_tree?: (string | null);
    /**
     * Dependency files: package.json, requirements.txt, etc.
     */
    dependencies?: (Record<string, string> | null);
    /**
     * Git diff for migration/upgrade scenarios
     */
    git_diff?: (string | null);
    /**
     * High-level description of the codebase
     */
    summary?: (string | null);
    /**
     * Paths to prioritize in analysis
     */
    focus_paths?: (Array<string> | null);
};

