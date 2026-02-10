/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditedFile_Output } from './EditedFile_Output';
import type { LineageMetadata } from './LineageMetadata';
import type { NiaReferences_Output } from './NiaReferences_Output';
/**
 * Response model for context operations.
 */
export type ContextShareResponse = {
    id: string;
    user_id: string;
    organization_id?: (string | null);
    title: string;
    summary: string;
    content: string;
    tags: Array<string>;
    agent_source: string;
    created_at: string;
    updated_at?: (string | null);
    metadata: Record<string, any>;
    nia_references?: (NiaReferences_Output | null);
    edited_files?: Array<EditedFile_Output>;
    memory_type?: 'scratchpad' | 'episodic' | 'fact' | 'procedural';
    expires_at?: (string | null);
    lineage?: (LineageMetadata | null);
    category_id?: (string | null);
};

