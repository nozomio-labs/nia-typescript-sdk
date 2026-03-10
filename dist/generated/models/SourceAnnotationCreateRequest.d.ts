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
