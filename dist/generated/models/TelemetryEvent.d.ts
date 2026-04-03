export type TelemetryEvent = {
    seq: number;
    ts: string;
    type?: string;
    raw: string;
    name: string;
    args?: Array<any>;
    cwd?: string;
    exit_code?: number;
    stdout_bytes?: number;
    stderr_bytes?: number;
    duration_ms?: number;
    pattern?: (string | null);
    paths?: null;
    flags?: null;
    result_files?: null;
};
