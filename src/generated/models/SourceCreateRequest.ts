/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseFileItem } from './DatabaseFileItem';
import type { FileItem } from './FileItem';
export type SourceCreateRequest = {
    type: 'repository' | 'documentation' | 'research_paper' | 'huggingface_dataset' | 'local_folder';
    repository?: (string | null);
    branch?: (string | null);
    ref?: (string | null);
    url?: (string | null);
    url_patterns?: (Array<string> | null);
    exclude_patterns?: (Array<string> | null);
    project_id?: (string | null);
    max_age?: (number | null);
    formats?: (Array<string> | null);
    only_main_content?: (boolean | null);
    limit?: (number | null);
    max_depth?: (number | null);
    crawl_entire_domain?: (boolean | null);
    wait_for?: (number | null);
    include_screenshot?: (boolean | null);
    check_llms_txt?: (boolean | null);
    llms_txt_strategy?: (string | null);
    add_as_global_source?: (boolean | null);
    is_pdf?: (boolean | null);
    display_name?: (string | null);
    focus_instructions?: (string | null);
    extract_branding?: (boolean | null);
    extract_images?: (boolean | null);
    config?: (string | null);
    folder_name?: (string | null);
    folder_path?: (string | null);
    files?: (Array<FileItem> | null);
    database?: (DatabaseFileItem | null);
};

