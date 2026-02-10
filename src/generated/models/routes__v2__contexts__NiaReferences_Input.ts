/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { routes__v2__contexts__IndexedResource } from './routes__v2__contexts__IndexedResource';
import type { routes__v2__contexts__SearchQuery } from './routes__v2__contexts__SearchQuery';
/**
 * Structured tracking of NIA resources used during conversation.
 */
export type routes__v2__contexts__NiaReferences_Input = {
    indexed_resources?: Array<routes__v2__contexts__IndexedResource>;
    search_queries?: Array<routes__v2__contexts__SearchQuery>;
    session_summary?: (string | null);
};

