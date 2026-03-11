/**
 * Desktop-side decrypt session lifecycle management.
 *
 * The desktop creates a session, hands the session_id to the remote agent,
 * and periodically checks/refreshes the session while the agent is working.
 */
import type { CreateE2ESessionInput, E2ESession, E2ESessionStatus } from "../daemon-types";
export interface SessionManagerOptions {
    createSession: (input: CreateE2ESessionInput) => Promise<E2ESession>;
    getSessionStatus: (sessionId: string) => Promise<E2ESessionStatus>;
    pollIntervalMs?: number;
}
export declare class E2ESessionManager {
    private activeSession;
    private pollTimer;
    private readonly pollIntervalMs;
    private readonly createSessionFn;
    private readonly getStatusFn;
    constructor(options: SessionManagerOptions);
    start(input: CreateE2ESessionInput): Promise<E2ESession>;
    stop(): void;
    get session(): E2ESession | null;
    get sessionId(): string | null;
    refresh(): Promise<E2ESessionStatus | null>;
    private startPolling;
}
