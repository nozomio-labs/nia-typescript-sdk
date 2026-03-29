/**
 * A citation from the document agent with full location metadata.
 */
export type DocumentCitation = {
    content: string;
    page_number?: (number | null);
    section_id?: (string | null);
    section_title?: (string | null);
    section_path?: (Array<string> | null);
    tool_source: string;
};
