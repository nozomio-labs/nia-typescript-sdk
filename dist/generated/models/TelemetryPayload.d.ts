import type { TelemetryEvent } from './TelemetryEvent';
export type TelemetryPayload = {
    session_id: string;
    namespace: string;
    domain: string;
    url: string;
    mode: string;
    started_at: string;
    ended_at: string;
    file_count?: number;
    events?: Array<TelemetryEvent>;
};
