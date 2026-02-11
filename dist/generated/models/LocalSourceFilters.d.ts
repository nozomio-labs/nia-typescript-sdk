/**
 * Filters for local/personal source retrieval (messages, contacts, etc.).
 */
export type LocalSourceFilters = {
    /**
     * Filter by source subtype (e.g., 'database', 'telegram_export')
     */
    source_subtype?: (string | null);
    /**
     * Filter by database type (e.g., 'imessage', 'telegram', 'safari_history')
     */
    db_type?: (string | null);
    /**
     * Filter by connector type (e.g., 'imessage', 'whatsapp', 'contacts')
     */
    connector_type?: (string | null);
    /**
     * Filter to a specific conversation/chat
     */
    conversation_id?: (string | null);
    /**
     * Filter to messages with a specific contact
     */
    contact_id?: (string | null);
    /**
     * Filter by sender role: 'self' or 'contact'
     */
    sender_role?: (string | null);
    /**
     * Only return results with timestamp after this ISO datetime
     */
    time_after?: (string | null);
    /**
     * Only return results with timestamp before this ISO datetime
     */
    time_before?: (string | null);
};
