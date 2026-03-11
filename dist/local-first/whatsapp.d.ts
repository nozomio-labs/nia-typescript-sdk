/**
 * WhatsApp SQLite adapter for local-first sync.
 *
 * Follows the same pattern as imessage.ts: extract rows from local
 * WhatsApp SQLite DB, group into conversation chunks, and produce
 * a sync batch ready for `DaemonClient.pushSync()` or E2E upload.
 */
import type { LocalIMessageSyncFilters } from "./types";
export interface LocalWhatsAppRow {
    messageId: number;
    text?: string | null;
    timestamp?: number | null;
    isFromMe?: boolean;
    chatId?: string | null;
    chatName?: string | null;
    senderName?: string | null;
    senderPhone?: string | null;
    isGroupChat?: boolean;
}
export interface LocalWhatsAppCursor {
    lastMessageId?: number;
    lastTimestamp?: number;
}
export interface LocalWhatsAppMetadata {
    dbType: "whatsapp";
    sourceSubtype: "database";
    connectorType: "whatsapp";
    db_type: "whatsapp";
    source_subtype: "database";
    connector_type: "whatsapp";
    messageId: number;
    timestamp: string | null;
    contact: string;
    contactId: string;
    contact_id: string;
    chatId: string;
    chat_id: string;
    chatName: string;
    conversationId: string;
    conversation_id: string;
    senderRole: "self" | "contact";
    sender_role: "self" | "contact";
    isFromMe: boolean;
    isGroupChat: boolean;
    is_group_chat: boolean;
    senderName?: string | null;
    senderPhone?: string | null;
    participants?: string[];
    messageCount?: number;
    message_count?: number;
    isConversationChunk?: boolean;
    is_conversation_chunk?: boolean;
}
export interface LocalWhatsAppFile {
    path: string;
    content: string;
    metadata: LocalWhatsAppMetadata;
}
export interface LocalWhatsAppSyncBatch {
    files: LocalWhatsAppFile[];
    cursor: Required<LocalWhatsAppCursor>;
    stats: {
        extracted: number;
        chunks: number;
        dbType: "whatsapp";
    };
}
interface BuildArgs {
    rows: LocalWhatsAppRow[];
    cursor?: LocalWhatsAppCursor;
    filters?: LocalIMessageSyncFilters;
    contactLookup?: Record<string, string>;
    windowMinutes?: number;
}
export declare function buildLocalWhatsAppSyncBatch({ rows, cursor, filters, contactLookup, windowMinutes, }: BuildArgs): LocalWhatsAppSyncBatch;
export {};
