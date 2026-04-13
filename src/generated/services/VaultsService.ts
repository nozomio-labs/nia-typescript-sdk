/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VaultsService {
    /**
     * Create Vault
     * Create a new vault.
     *
     * Body: {display_name: str, description?: str, source_ids?: [str], schema_md?: str}
     *
     * Bootstraps the vault namespace with schema.md/index.md/log.md/META.md.
     * Does NOT auto-trigger ingest — call POST /v2/vaults/{id}/run with
     * mode=ingest after creation if you want immediate ingestion.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createVaultV2VaultsPost(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults',
        });
    }
    /**
     * List Vaults
     * List vaults owned by the calling user / org.
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listVaultsV2VaultsGet(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Available Sources
     * Return every source the user can add to a vault.
     *
     * Merges data_sources (excluding vaults), local_folders, and projects into a
     * single list with a unified shape so the frontend picker shows everything.
     * @param q Search filter on display_name / url
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listAvailableSourcesV2VaultsAvailableSourcesGet(
        q?: (string | null),
        limit: number = 500,
        offset?: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/available-sources',
            query: {
                'q': q,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Vault
     * Get vault metadata and current workflow status.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getVaultV2VaultsVaultIdGet(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Vault
     * Delete a vault.
     *
     * Cleans up Postgres files AND TurboPuffer chunks. Order matters: drop
     * TurboPuffer first, then PG, then Mongo. If any step fails before the Mongo
     * delete, the vault row remains so the user can retry without losing
     * accounting state.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteVaultV2VaultsVaultIdDelete(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vaults/{vault_id}',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Vault
     * Update vault metadata (display_name, description, schema_md).
     *
     * When schema_md is updated, the new content is also written into the
     * vault namespace as `/schema.md` so the bash session sees it immediately.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static patchVaultV2VaultsVaultIdPatch(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/vaults/{vault_id}',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Vault Agent
     * Stream an AI agent response that can search/read the vault.
     *
     * Returns an SSE stream of events (same shape as the document agent).
     * Charges one QUERY credit per call; refunds on failure.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static vaultAgentV2VaultsVaultIdAgentPost(
        vaultId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/agent',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Vault Workflow
     * Cancel an in-flight vault workflow run, if any.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static cancelVaultWorkflowV2VaultsVaultIdCancelPost(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/cancel',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Vault Graph
     * Return the wikilink graph as nodes + edges for visualization.
     *
     * Walks all concept/entity/note pages, parses [[wikilinks]], and builds a
     * force-directed-ready JSON structure. No LLM calls — pure file parsing.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static vaultGraphV2VaultsVaultIdGraphGet(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}/graph',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Load Vault
     * Bootstrap dump for the `nia vault open` bash session.
     *
     * Mirrors the shape of /shell-docs/load. Returns vault metadata and either
     * full file contents or just paths (for vaults > 1000 files).
     *
     * Up to 10000 files are returned (matches DIR_LISTING_LIMIT in fs_service.py).
     * @param vaultId
     * @param pathsOnly
     * @returns any Successful Response
     * @throws ApiError
     */
    public static loadVaultV2VaultsVaultIdLoadGet(
        vaultId: string,
        pathsOnly: boolean = false,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}/load',
            path: {
                'vault_id': vaultId,
            },
            query: {
                'paths_only': pathsOnly,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Run Vault Workflow
     * Trigger a vault_workflow run. Body: {mode: ingest|sync|lint|refresh, source_ids?: [], model?: str, force?: bool}
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static runVaultWorkflowV2VaultsVaultIdRunPost(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/run',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Vault
     * Hybrid search scoped to this vault's namespace.
     *
     * Returns embedded vault pages as ranked results with citations. The vault
     * namespace was populated by the existing `fs_sync_workflow` mirroring every
     * write into TurboPuffer (see routes/v2/fs.py:294-313).
     *
     * Telemetry: emits both `store_api_activity` (for the user-facing activity
     * feed) and `store_retrieval_log` (for the training-data pipeline) so vault
     * searches show up alongside every other retrieval call. Two retrieval logs
     * are written for the two-tier strategy: a `vector` log for the TurboPuffer
     * path, and a `regex` log if the PG grep fallback fires.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchVaultV2VaultsVaultIdSearchPost(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/search',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Vault Sources
     * List the source IDs currently linked to this vault, with metadata.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listVaultSourcesV2VaultsVaultIdSourcesGet(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{vault_id}/sources',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Vault Source
     * Add a source to the vault's source_ids[]. Idempotent.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addVaultSourceV2VaultsVaultIdSourcesPost(
        vaultId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vaults/{vault_id}/sources',
            path: {
                'vault_id': vaultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Vault Source
     * Remove a source from the vault's source_ids[]. Idempotent.
     * @param vaultId
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeVaultSourceV2VaultsVaultIdSourcesSourceIdDelete(
        vaultId: string,
        sourceId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vaults/{vault_id}/sources/{source_id}',
            path: {
                'vault_id': vaultId,
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
