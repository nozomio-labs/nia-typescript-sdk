export type EngineeringQueryRequest = {
    query: string;
    conversation_history?: Array<Record<string, string>>;
};
