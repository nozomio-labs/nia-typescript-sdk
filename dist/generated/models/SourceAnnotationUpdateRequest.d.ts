export type SourceAnnotationUpdateRequest = {
    /**
     * Updated annotation category
     */
    kind?: ('note' | 'tip' | 'warning' | 'gotcha' | null);
    /**
     * Updated annotation body
     */
    content?: (string | null);
};
