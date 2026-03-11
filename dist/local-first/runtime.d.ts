import type { LocalFirstRuntimeProfile } from "./types";
export declare const LOCAL_FIRST_RUNTIME_PROFILES: Record<LocalFirstRuntimeProfile["id"], LocalFirstRuntimeProfile>;
export declare const DEFAULT_LOCAL_FIRST_RUNTIME_PROFILE: LocalFirstRuntimeProfile;
export declare function getLocalFirstRuntimeProfile(profileId?: LocalFirstRuntimeProfile["id"]): LocalFirstRuntimeProfile;
