/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

