import type { CancelablePromise } from '../core/CancelablePromise';
export declare class VaultsService {
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
    static createVaultV2VaultsPost(): CancelablePromise<Record<string, any>>;
    /**
     * List Vaults
     * List vaults owned by the calling user / org.
     * @param limit
     * @param offset
     * @returns any Successful Response
     * @throws ApiError
     */
    static listVaultsV2VaultsGet(limit?: number, offset?: number): CancelablePromise<Record<string, any>>;
    /**
     * Get Vault
     * Get vault metadata and current workflow status.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getVaultV2VaultsVaultIdGet(vaultId: string): CancelablePromise<Record<string, any>>;
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
    static deleteVaultV2VaultsVaultIdDelete(vaultId: string): CancelablePromise<Record<string, any>>;
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
    static patchVaultV2VaultsVaultIdPatch(vaultId: string): CancelablePromise<Record<string, any>>;
    /**
     * Cancel Vault Workflow
     * Cancel an in-flight vault workflow run, if any.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static cancelVaultWorkflowV2VaultsVaultIdCancelPost(vaultId: string): CancelablePromise<Record<string, any>>;
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
    static vaultGraphV2VaultsVaultIdGraphGet(vaultId: string): CancelablePromise<Record<string, any>>;
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
    static loadVaultV2VaultsVaultIdLoadGet(vaultId: string, pathsOnly?: boolean): CancelablePromise<Record<string, any>>;
    /**
     * Run Vault Workflow
     * Trigger a vault_workflow run. Body: {mode: ingest|sync|lint|refresh, source_ids?: [], model?: str, force?: bool}
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static runVaultWorkflowV2VaultsVaultIdRunPost(vaultId: string): CancelablePromise<Record<string, any>>;
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
    static searchVaultV2VaultsVaultIdSearchPost(vaultId: string): CancelablePromise<Record<string, any>>;
    /**
     * List Vault Sources
     * List the source IDs currently linked to this vault, with metadata.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static listVaultSourcesV2VaultsVaultIdSourcesGet(vaultId: string): CancelablePromise<Record<string, any>>;
    /**
     * Add Vault Source
     * Add a source to the vault's source_ids[]. Idempotent.
     * @param vaultId
     * @returns any Successful Response
     * @throws ApiError
     */
    static addVaultSourceV2VaultsVaultIdSourcesPost(vaultId: string): CancelablePromise<Record<string, any>>;
    /**
     * Remove Vault Source
     * Remove a source from the vault's source_ids[]. Idempotent.
     * @param vaultId
     * @param sourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    static removeVaultSourceV2VaultsVaultIdSourcesSourceIdDelete(vaultId: string, sourceId: string): CancelablePromise<Record<string, any>>;
}
