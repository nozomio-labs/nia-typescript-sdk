/**
 * Client-side AES-256-GCM encryption for E2E local-first sync.
 *
 * The encryption key never leaves the desktop. Nia Cloud only ever
 * stores ciphertext and cannot decrypt content without the key.
 *
 * Uses only the Web Crypto API (no Node.js dependencies).
 */
export interface EncryptionEnvelope {
    ciphertext: string;
    iv: string;
    salt?: string;
}
declare function toBase64(buf: ArrayBuffer | Uint8Array): string;
declare function fromBase64(str: string): Uint8Array;
export declare function deriveKeyFromPassphrase(passphrase: string, salt?: Uint8Array): Promise<{
    key: CryptoKey;
    salt: Uint8Array;
}>;
export declare function importRawKey(rawKeyBytes: Uint8Array): Promise<CryptoKey>;
export declare function encryptContent(plaintext: string, key: CryptoKey): Promise<EncryptionEnvelope>;
export declare function decryptContent(envelope: EncryptionEnvelope, key: CryptoKey): Promise<string>;
export declare function encryptToBase64(plaintext: string, key: CryptoKey): Promise<string>;
export declare function decryptFromBase64(encoded: string, key: CryptoKey): Promise<string>;
export { toBase64, fromBase64 };
