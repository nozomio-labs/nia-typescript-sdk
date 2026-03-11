import type { QuerySearchRequest } from "../generated";
import type { HybridSearchArgs, HybridSearchResult } from "./types";
export declare function buildPrivateCloudQueryRequest(args: Pick<HybridSearchArgs, "messages" | "repositories" | "dataSources" | "localSourceFilters">): QuerySearchRequest;
export declare function searchHybridSources(args: HybridSearchArgs): Promise<HybridSearchResult>;
