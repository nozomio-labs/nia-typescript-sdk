/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LineageInput } from './LineageInput';
import type { routes__v2__contexts__EditedFile } from './routes__v2__contexts__EditedFile';
import type { routes__v2__contexts__NiaReferences_Input } from './routes__v2__contexts__NiaReferences_Input';
/**
 * Request model for updating a shared context.
 */
export type ContextShareUpdateRequest = {
    title?: (string | null);
    summary?: (string | null);
    content?: (string | null);
    tags?: (Array<string> | null);
    metadata?: (Record<string, any> | null);
    nia_references?: (routes__v2__contexts__NiaReferences_Input | null);
    edited_files?: (Array<routes__v2__contexts__EditedFile> | null);
    organization_id?: (string | null);
    /**
     * Memory type
     */
    memory_type?: ('scratchpad' | 'episodic' | 'fact' | 'procedural' | null);
    /**
     * Custom TTL in seconds
     */
    ttl_seconds?: (number | null);
    /**
     * Provenance tracking
     */
    lineage?: (LineageInput | null);
};

