/**
 * Desktop-side decrypt session lifecycle management.
 *
 * The desktop creates a session, hands the session_id to the remote agent,
 * and periodically checks/refreshes the session while the agent is working.
 */
export class E2ESessionManager {
    activeSession = null;
    pollTimer = null;
    pollIntervalMs;
    createSessionFn;
    getStatusFn;
    constructor(options) {
        this.createSessionFn = options.createSession;
        this.getStatusFn = options.getSessionStatus;
        this.pollIntervalMs = options.pollIntervalMs ?? 30_000;
    }
    async start(input) {
        this.stop();
        this.activeSession = await this.createSessionFn(input);
        this.startPolling();
        return this.activeSession;
    }
    stop() {
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
        }
        this.activeSession = null;
    }
    get session() {
        return this.activeSession;
    }
    get sessionId() {
        return this.activeSession?.sessionId ?? null;
    }
    async refresh() {
        if (!this.activeSession)
            return null;
        const status = await this.getStatusFn(this.activeSession.sessionId);
        if (status.status !== "active") {
            this.stop();
        }
        return status;
    }
    startPolling() {
        this.pollTimer = setInterval(async () => {
            try {
                await this.refresh();
            }
            catch {
                // swallow — desktop should not crash on poll failure
            }
        }, this.pollIntervalMs);
    }
}
