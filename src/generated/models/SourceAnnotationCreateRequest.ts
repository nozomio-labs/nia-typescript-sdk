/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SourceAnnotationCreateRequest = {
    /**
     * Annotation category
     */
    kind?: 'note' | 'tip' | 'warning' | 'gotcha';
    /**
     * Annotation body
     */
    content: string;
};

