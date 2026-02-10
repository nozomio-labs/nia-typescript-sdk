# Nia AI TypeScript SDK

The official TypeScript SDK for the [Nia AI](https://trynia.ai) API. Index repositories, documentation, and research papers, then search across them with semantic search, deep research, and autonomous Oracle agents.

[![npm](https://img.shields.io/npm/v/nia-ai-ts)](https://www.npmjs.com/package/nia-ai-ts)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)

## Installation

```bash
npm install nia-ai-ts
```

Or with other package managers:

```bash
yarn add nia-ai-ts
pnpm add nia-ai-ts
bun add nia-ai-ts
```

## Quick Start

### High-Level SDK (Recommended)

```typescript
import { NiaSDK } from "nia-ai-ts";

const sdk = new NiaSDK({ apiKey: process.env.NIA_API_KEY! });

// Semantic search across all your indexed sources
const results = await sdk.search.universal({ query: "How does authentication work?" });
console.log(results);
```

### Low-Level Services

For direct control over individual API calls:

```typescript
import { OpenAPI, V2ApiSearchService } from "nia-ai-ts";

OpenAPI.BASE = "https://apigcp.trynia.ai/v2";
OpenAPI.TOKEN = process.env.NIA_API_KEY!;

const results = await V2ApiSearchService.searchUniversalV2V2SearchUniversalPost({
  query: "How does authentication work?",
});
```

## SDK Reference

### NiaSDK

The main entry point. Initializes all sub-clients.

```typescript
const sdk = new NiaSDK({
  apiKey: "nia_...",                               // required
  baseUrl: "https://apigcp.trynia.ai/v2",          // default
  maxRetries: 2,                                    // retries on failures
  initialBackoffMs: 500,                            // exponential backoff base (ms)
});
```

### SearchClient (`sdk.search`)

| Method | Description |
|--------|-------------|
| `query(args)` | Conversational search with chat history against specific sources |
| `universal(args)` | Semantic search across all indexed sources |
| `web(args)` | Web search |
| `deep(args)` | Multi-step research with AI analysis and citations |

```typescript
// Conversational search
const result = await sdk.search.query({
  messages: [{ role: "user", content: "How does streaming work?" }],
  repositories: ["vercel/ai"],
  include_sources: true,
  fast_mode: true,
  reasoning_strategy: "hybrid",
});

// Universal search
const universal = await sdk.search.universal({
  query: "implement retry logic",
  top_k: 20,
  include_repos: true,
  include_docs: true,
});

// Web search
const web = await sdk.search.web({ query: "latest LLM developments" });

// Deep research
const deep = await sdk.search.deep({
  query: "Compare React Server Components vs traditional SSR",
  output_format: "comparison table",
});
```

### SourcesClient (`sdk.sources`)

| Method | Description |
|--------|-------------|
| `create(payload)` | Create a new source (repo, docs, paper, etc.) |
| `list(params)` | List sources with filtering |
| `resolve(params)` | Resolve a source by name or URL |

```typescript
// Index a repository
await sdk.sources.create({ url: "https://github.com/vercel/ai" });

// Index documentation
await sdk.sources.create({ url: "https://docs.anthropic.com", display_name: "Anthropic Docs" });

// List repositories
const repos = await sdk.sources.list({ type: "repository", limit: 50 });

// Resolve by name
const source = await sdk.sources.resolve({ identifier: "vercel/ai" });
```

**Source types:** `repository`, `documentation`, `research_paper`, `huggingface_dataset`, `local_folder`

### OracleClient (`sdk.oracle`)

| Method | Description |
|--------|-------------|
| `createJob(payload)` | Start an autonomous research job |
| `getJob(jobId)` | Get job status and result |
| `waitForJob(jobId, timeoutMs?, pollIntervalMs?)` | Poll until job completes |
| `streamJob(jobId)` | Async generator yielding SSE events |

```typescript
// Start a job
const job = await sdk.oracle.createJob({
  query: "Analyze the caching architecture in Next.js",
  repositories: ["vercel/next.js"],
  model: "claude-sonnet-4-5-20250929",
});

// Wait for completion (default: 10 min timeout, 2s poll)
const result = await sdk.oracle.waitForJob(job.id);

// Or stream events in real-time
for await (const event of sdk.oracle.streamJob(job.id)) {
  console.log(event);
}
```

**Available models:** `claude-opus-4-6`, `claude-opus-4-6-1m`, `claude-sonnet-4-5-20250929`, `claude-sonnet-4-5-1m`

## Low-Level Services

The SDK exports generated service classes for direct API access. All services use the global `OpenAPI` configuration for base URL and authentication.

```typescript
import { OpenAPI } from "nia-ai-ts";

OpenAPI.BASE = "https://apigcp.trynia.ai/v2";
OpenAPI.TOKEN = "nia_your_api_key";
```

### Available Services

| Service | Description |
|---------|-------------|
| `V2ApiSearchService` | Unified search, query, web, deep, universal |
| `V2ApiRepositoriesService` | Index, list, delete repos; read files, grep, tree |
| `V2ApiDataSourcesService` | Index docs, research papers, HuggingFace datasets |
| `V2ApiSourcesService` | Unified source CRUD, resolve by identifier |
| `V2ApiContextsService` | Save and search cross-session context |
| `V2ApiPackageSearchService` | Search npm/PyPI package source code |
| `V2ApiCategoriesService` | Organize sources into categories |
| `GithubSearchService` | Live GitHub code search, Tracer jobs |
| `DefaultService` | Oracle jobs, sessions, streaming |

### Example: Repository Operations

```typescript
import { V2ApiRepositoriesService } from "nia-ai-ts";

// Index a repository
await V2ApiRepositoriesService.indexRepositoryV2V2RepositoriesPost({
  repository: "vercel/ai",
  branch: "main",
});

// List repositories
const repos = await V2ApiRepositoriesService.listRepositoriesV2V2RepositoriesGet();

// Get file tree
const tree = await V2ApiRepositoriesService.getRepositoryTreeV2V2RepositoriesRepositoryIdTreeGet(
  "vercel/ai"
);

// Read a file
const content = await V2ApiRepositoriesService.getRepositoryContentV2V2RepositoriesRepositoryIdContentGet(
  "vercel/ai",
  "src/index.ts"
);

// Grep search
const matches = await V2ApiRepositoriesService.grepRepositoryV2V2RepositoriesRepositoryIdGrepPost(
  "vercel/ai",
  { pattern: "async function", context_lines: 2 }
);
```

### Example: Documentation

```typescript
import { V2ApiDataSourcesService } from "nia-ai-ts";

// Index documentation
await V2ApiDataSourcesService.createDataSourceV2V2DataSourcesPost({
  url: "https://docs.anthropic.com",
  display_name: "Anthropic Docs",
  crawl_entire_domain: true,
});

// List data sources
const sources = await V2ApiDataSourcesService.listDataSourcesV2V2DataSourcesGet();
```

### Example: Context Sharing

```typescript
import { V2ApiContextsService } from "nia-ai-ts";

// Save context
await V2ApiContextsService.saveContextV2V2ContextsPost({
  title: "Auth implementation notes",
  summary: "Implemented OAuth2 flow with refresh tokens",
  content: "Detailed implementation notes...",
  tags: ["auth", "oauth"],
});

// Semantic search
const results = await V2ApiContextsService.semanticSearchContextsV2V2ContextsSemanticSearchGet(
  "authentication"
);
```

## Streaming

The SDK supports Server-Sent Events (SSE) streaming for Oracle research jobs:

```typescript
const job = await sdk.oracle.createJob({
  query: "How does Next.js handle caching?",
  repositories: ["vercel/next.js"],
});

// streamJob returns an AsyncGenerator<object>
for await (const event of sdk.oracle.streamJob(job.id)) {
  const type = (event as any).type ?? "data";
  console.log(`[${type}]`, JSON.stringify(event));
}
```

The stream uses `fetch` with the Bearer token and parses `data: ` prefixed JSON lines from the SSE response.

## Error Handling

### High-Level SDK

```typescript
import { NiaSDK, NiaSDKError, NiaTimeoutError } from "nia-ai-ts";

const sdk = new NiaSDK({ apiKey: "nia_..." });

try {
  const result = await sdk.search.universal({ query: "test" });
} catch (error) {
  if (error instanceof NiaTimeoutError) {
    // Oracle job or long-running operation exceeded timeout
    console.error("Timeout:", error.message);
  } else if (error instanceof NiaSDKError) {
    // Base class for all SDK errors
    console.error("SDK error:", error.message);
  }
}
```

### Low-Level Services

```typescript
import { ApiError, V2ApiRepositoriesService } from "nia-ai-ts";

try {
  const repos = await V2ApiRepositoriesService.listRepositoriesV2V2RepositoriesGet();
} catch (error) {
  if (error instanceof ApiError) {
    console.error(`HTTP ${error.status}: ${error.statusText}`);
    console.error("Body:", error.body);
    console.error("URL:", error.url);
  }
}
```

### Retry Behavior

The high-level SDK automatically retries failed requests with exponential backoff:

- **Default:** 2 retries with 500ms initial backoff
- **Backoff formula:** `initialBackoffMs * 2^attempt` (500ms -> 1000ms -> 2000ms)
- Retries are applied to all `SearchClient`, `SourcesClient`, and `OracleClient` methods

### Cancellable Requests

Low-level service calls return `CancelablePromise` instances:

```typescript
const request = V2ApiRepositoriesService.listRepositoriesV2V2RepositoriesGet();

// Cancel if needed
request.cancel();
```

## TypeScript Types

The SDK exports 140+ TypeScript interfaces for full type safety:

```typescript
import type {
  // Request types
  RepositoryRequest,
  DataSourceRequest,
  OracleResearchRequest,
  QuerySearchRequest,
  UniversalSearchRequest,
  CodeGrepRequest,
  TracerRequest,
  AdvisorRequest,
  // Response types
  DeepResearchResponse,
  WebSearchResponse,
  RepositoryIndexResponse,
  // Model types
  Source,
  SourceType,
  DocumentTree,
  // Enums
  CodeGrepOptionsOutputMode,
} from "nia-ai-ts";
```

## Documentation

- [SDK Quickstart](https://docs.trynia.ai/sdk/quickstart)
- [Authentication Guide](https://docs.trynia.ai/sdk/authentication)
- [Full Examples](https://docs.trynia.ai/sdk/examples)
- [REST API Reference](https://docs.trynia.ai/api-guide)

## License

MIT
