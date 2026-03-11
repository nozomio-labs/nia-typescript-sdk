/**
 * Deterministic blind-index generation for E2E encrypted search.
 *
 * Produces HMAC-SHA256 tokens from plaintext content so the server
 * can perform keyword-style matching without ever seeing raw text.
 *
 * Uses only the Web Crypto API (no Node.js dependencies).
 */
export declare function importBlindIndexKey(rawKeyBytes: Uint8Array): Promise<CryptoKey>;
export declare function deriveBlindIndexKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey>;
export declare function generateBlindIndexTokens(content: string, key: CryptoKey, maxTokens?: number): Promise<string[]>;
export declare function hashIdentifier(identifier: string, key: CryptoKey): Promise<string>;
