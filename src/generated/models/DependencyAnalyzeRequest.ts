/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DependencyAnalyzeRequest = {
    /**
     * Raw content of the manifest file
     */
    manifest_content: string;
    /**
     * Manifest type. Auto-detected if not provided.
     */
    manifest_type?: ('package.json' | 'requirements.txt' | 'pyproject.toml' | 'Cargo.toml' | 'go.mod' | 'Gemfile' | null);
    /**
     * Original filename for type detection
     */
    filename?: (string | null);
};

