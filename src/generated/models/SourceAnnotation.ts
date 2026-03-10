/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A saved note attached to a source.
 */
export type SourceAnnotation = {
    /**
     * Annotation identifier
     */
    id: string;
    /**
     * Annotation category
     */
    kind?: 'note' | 'tip' | 'warning' | 'gotcha';
    /**
     * Annotation text
     */
    content: string;
    /**
     * Creation timestamp (ISO)
     */
    created_at?: (string | null);
    /**
     * Last update timestamp (ISO)
     */
    updated_at?: (string | null);
};

