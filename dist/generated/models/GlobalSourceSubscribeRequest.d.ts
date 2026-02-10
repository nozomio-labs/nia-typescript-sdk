/**
 * Request model for subscribing to a global source
 */
export type GlobalSourceSubscribeRequest = {
    /**
     * URL of the source (GitHub repo, docs URL, arXiv URL/ID, or HuggingFace dataset URL)
     */
    url: string;
    /**
     * Source type. Auto-detected from URL if not provided.
     */
    source_type?: ('repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | null);
    /**
     * Git ref for repositories (branch, tag, or commit SHA)
     */
    ref?: (string | null);
};
