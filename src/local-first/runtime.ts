import type { LocalFirstRuntimeProfile } from "./types";

export const LOCAL_FIRST_RUNTIME_PROFILES: Record<
  LocalFirstRuntimeProfile["id"],
  LocalFirstRuntimeProfile
> = {
  "sqlite-vec": {
    id: "sqlite-vec",
    embedding: {
      kind: "transformers.js",
      locality: "on-device",
    },
    vectorStore: {
      kind: "sqlite-vec",
      locality: "on-device",
    },
    processModel: "embedded",
    packagingTradeoffs:
      "Default for Electron consumers: embedded SQLite storage avoids subprocess management and keeps private retrieval on-device.",
  },
  chroma: {
    id: "chroma",
    embedding: {
      kind: "transformers.js",
      locality: "on-device",
    },
    vectorStore: {
      kind: "chroma",
      locality: "on-device",
    },
    processModel: "sidecar",
    packagingTradeoffs:
      "Heavier option: local Chroma can work well, but it usually means a subprocess and more operational packaging overhead.",
  },
};

export const DEFAULT_LOCAL_FIRST_RUNTIME_PROFILE =
  LOCAL_FIRST_RUNTIME_PROFILES["sqlite-vec"];

export function getLocalFirstRuntimeProfile(
  profileId: LocalFirstRuntimeProfile["id"] = "sqlite-vec",
) {
  return LOCAL_FIRST_RUNTIME_PROFILES[profileId];
}
