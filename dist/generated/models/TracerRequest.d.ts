export type TracerRequest = {
    /**
     * Research question
     */
    query: string;
    /**
     * Repositories in owner/repo format
     */
    repositories?: (Array<string> | null);
    /**
     * Additional context
     */
    context?: (string | null);
    /**
     * Optional model override (claude-haiku-4-5-20251001, claude-opus-4-6, or claude-opus-4-6-1m). Must match mode when both are provided.
     */
    model?: ('claude-haiku-4-5-20251001' | 'claude-opus-4-6' | 'claude-opus-4-6-1m' | null);
    /**
     * Tracer mode: tracer-fast (Haiku) or tracer-deep (Opus). Defaults to tracer-deep. When mode and model are both provided, they must agree.
     */
    mode?: ('tracer-fast' | 'tracer-deep' | null);
};
