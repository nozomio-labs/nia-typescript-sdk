/**
 * Apple Contacts adapter for local-first sync.
 *
 * Each contact card becomes a single sync file containing the
 * contact's name, organization, emails, and phone numbers.
 */
export interface LocalContactRow {
    contactId: string;
    firstName?: string | null;
    lastName?: string | null;
    organization?: string | null;
    emails?: string[];
    phoneNumbers?: string[];
    modifiedAt?: number | null;
}
export interface LocalContactsCursor {
    lastSyncTimestamp?: number;
}
export interface LocalContactFile {
    path: string;
    content: string;
    metadata: {
        connectorType: "contacts";
        connector_type: "contacts";
        sourceSubtype: "file";
        source_subtype: "file";
        contactId: string;
        contact_id: string;
        firstName: string;
        lastName: string;
        organization: string;
    };
}
export interface LocalContactsSyncBatch {
    files: LocalContactFile[];
    cursor: Required<LocalContactsCursor>;
    stats: {
        extracted: number;
        chunks: number;
        dbType: "contacts";
    };
}
export declare function buildLocalContactsSyncBatch({ rows, cursor, }: {
    rows: LocalContactRow[];
    cursor?: LocalContactsCursor;
}): LocalContactsSyncBatch;
