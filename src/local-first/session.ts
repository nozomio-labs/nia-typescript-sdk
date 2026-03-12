/**
 * Desktop-side decrypt session lifecycle management.
 *
 * The desktop creates a session, hands the session_id to the remote agent,
 * and periodically checks/refreshes the session while the agent is working.
 */

import type {
  CreateE2ESessionInput,
  E2ESession,
  E2ESessionStatus,
} from "../daemon-types";

export interface SessionManagerOptions {
  createSession: (input: CreateE2ESessionInput) => Promise<E2ESession>;
  getSessionStatus: (sessionId: string) => Promise<E2ESessionStatus>;
  pollIntervalMs?: number;
}

export class E2ESessionManager {
  private activeSession: E2ESession | null = null;
  private pollTimer: ReturnType<typeof setInterval> | null = null;
  private readonly pollIntervalMs: number;
  private readonly createSessionFn: SessionManagerOptions["createSession"];
  private readonly getStatusFn: SessionManagerOptions["getSessionStatus"];

  constructor(options: SessionManagerOptions) {
    this.createSessionFn = options.createSession;
    this.getStatusFn = options.getSessionStatus;
    this.pollIntervalMs = options.pollIntervalMs ?? 30_000;
  }

  async start(input: CreateE2ESessionInput): Promise<E2ESession> {
    this.stop();
    this.activeSession = await this.createSessionFn(input);
    this.startPolling();

    return this.activeSession;
  }

  stop(): void {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
    this.activeSession = null;
  }

  get session(): E2ESession | null {
    return this.activeSession;
  }

  get sessionId(): string | null {
    return this.activeSession?.sessionId ?? null;
  }

  async refresh(): Promise<E2ESessionStatus | null> {
    if (!this.activeSession) return null;
    const status = await this.getStatusFn(this.activeSession.sessionId);

    if (status.status !== "active") {
      this.stop();
    }

    return status;
  }

  private startPolling(): void {
    this.pollTimer = setInterval(async () => {
      try {
        await this.refresh();
      } catch {
        // swallow — desktop should not crash on poll failure
      }
    }, this.pollIntervalMs);
  }
}
