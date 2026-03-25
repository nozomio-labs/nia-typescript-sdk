/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EngineeringExtractResponse = {
    id: string;
    status: string;
    progress?: number;
    type?: string;
    accuracy_mode?: string;
    url?: (string | null);
    source_display_name?: (string | null);
    page_range?: (string | null);
    result?: (Record<string, any> | null);
    page_count?: number;
    error?: (string | null);
    chat_messages?: Array<Record<string, any>>;
    created_at: string;
    updated_at: string;
};

