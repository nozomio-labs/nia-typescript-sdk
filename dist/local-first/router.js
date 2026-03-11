function toLocalSearchFilters(filters) {
    if (!filters)
        return undefined;
    const senderRole = filters.sender_role === "self" || filters.sender_role === "contact"
        ? filters.sender_role
        : undefined;
    return {
        contactIds: filters.contact_id ? [filters.contact_id] : undefined,
        conversationIds: filters.conversation_id ? [filters.conversation_id] : undefined,
        senderRoles: senderRole ? [senderRole] : undefined,
        timeAfter: filters.time_after,
        timeBefore: filters.time_before,
        dbType: filters.db_type,
        sourceSubtype: filters.source_subtype,
        connectorType: filters.connector_type,
    };
}
function reciprocalRankFusion(localHits, cloudHits) {
    const fused = new Map();
    const addHits = (hits) => {
        hits.forEach((hit, index) => {
            const key = `${hit.kind}:${hit.id}`;
            const fusedScore = 1 / (60 + index + 1);
            const existing = fused.get(key);
            if (existing) {
                existing.fusedScore += fusedScore;
                return;
            }
            fused.set(key, {
                ...hit,
                fusedScore,
            });
        });
    };
    addHits(localHits);
    addHits(cloudHits);
    return [...fused.values()].sort((left, right) => right.fusedScore - left.fusedScore);
}
export function buildPrivateCloudQueryRequest(args) {
    return {
        messages: args.messages,
        repositories: args.repositories,
        data_sources: args.dataSources,
        local_source_filters: args.localSourceFilters ?? null,
        include_sources: true,
        search_mode: "unified",
    };
}
export async function searchHybridSources(args) {
    const localSearchFilters = toLocalSearchFilters(args.localSourceFilters);
    const localQueryEmbedding = await args.embedder.embedQuery(args.query);
    const localHits = await args.vectorStore.search({
        embedding: localQueryEmbedding,
        topK: args.topK ?? 5,
        filters: localSearchFilters,
    });
    const cloudRequest = buildPrivateCloudQueryRequest(args);
    const cloudHits = await args.cloudSearch(cloudRequest);
    return {
        localHits,
        cloudHits,
        fusedHits: reciprocalRankFusion(localHits, cloudHits),
        cloudRequest,
    };
}
