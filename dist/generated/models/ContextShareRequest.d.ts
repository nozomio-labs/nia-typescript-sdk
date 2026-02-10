import type { LineageInput } from './LineageInput';
import type { routes__v2__contexts__EditedFile } from './routes__v2__contexts__EditedFile';
import type { routes__v2__contexts__NiaReferences_Input } from './routes__v2__contexts__NiaReferences_Input';
/**
 * Request model for creating a shared context.
 */
export type ContextShareRequest = {
    title: string;
    summary: string;
    content: string;
    tags?: Array<string>;
    /**
     * Which agent created this context
     */
    agent_source: string;
    metadata?: Record<string, any>;
    organization_id?: (string | null);
    nia_references?: (routes__v2__contexts__NiaReferences_Input | null);
    edited_files?: Array<routes__v2__contexts__EditedFile>;
    /**
     * Memory type: scratchpad (1hr), episodic (7d), fact (permanent), procedural (permanent)
     */
    memory_type?: 'scratchpad' | 'episodic' | 'fact' | 'procedural';
    /**
     * Custom TTL in seconds. If not set, uses memory_type default.
     */
    ttl_seconds?: (number | null);
    /**
     * Provenance tracking for this context
     */
    lineage?: (LineageInput | null);
};
