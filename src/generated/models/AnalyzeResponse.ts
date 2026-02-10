/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DependencyItem } from './DependencyItem';
import type { MappingItem } from './MappingItem';
export type AnalyzeResponse = {
    manifest_type: string;
    total_dependencies: number;
    dependencies: Array<DependencyItem>;
    mappings: Array<MappingItem>;
    unmapped_count: number;
    unmapped_packages: Array<string>;
};

