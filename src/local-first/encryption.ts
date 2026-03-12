/**
 * Client-side AES-256-GCM encryption for E2E local-first sync.
 *
 * The encryption key never leaves the desktop. Nia Cloud only ever
 * stores ciphertext and cannot decrypt content without the key.
 *
 * Uses only the Web Crypto API (no Node.js dependencies).
 */

const ALGORITHM = "AES-GCM";
const KEY_LENGTH = 256;
const IV_LENGTH = 12;
const SALT_LENGTH = 16;
const PBKDF2_ITERATIONS = 600_000;

export interface EncryptionEnvelope {
  ciphertext: string;
  iv: string;
  salt?: string;
}

function getSubtle(): SubtleCrypto {
  return globalThis.crypto.subtle;
}

function randomBytes(length: number): Uint8Array {
  const buf = new Uint8Array(length);

  globalThis.crypto.getRandomValues(buf);

  return buf;
}

function toBase64(buf: ArrayBuffer | Uint8Array): string {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let binary = "";

  for (let i = 0; i < bytes.length; i++)
    binary += String.fromCharCode(bytes[i]!);

  return btoa(binary);
}

function fromBase64(str: string): Uint8Array {
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

  return bytes;
}

function asBuffer(arr: Uint8Array): ArrayBuffer {
  const buf = new ArrayBuffer(arr.byteLength);

  new Uint8Array(buf).set(arr);

  return buf;
}

export async function deriveKeyFromPassphrase(
  passphrase: string,
  salt?: Uint8Array,
): Promise<{ key: CryptoKey; salt: Uint8Array }> {
  const subtle = getSubtle();
  const actualSalt = salt ?? randomBytes(SALT_LENGTH);
  const encoder = new TextEncoder();

  const baseKey = await subtle.importKey(
    "raw",
    encoder.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  const derivedKey = await subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: asBuffer(actualSalt),
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    baseKey,
    { name: ALGORITHM, length: KEY_LENGTH },
    false,
    ["encrypt", "decrypt"],
  );

  return { key: derivedKey, salt: actualSalt };
}

export async function importRawKey(
  rawKeyBytes: Uint8Array,
): Promise<CryptoKey> {
  const subtle = getSubtle();

  return subtle.importKey(
    "raw",
    asBuffer(rawKeyBytes),
    { name: ALGORITHM, length: KEY_LENGTH },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function encryptContent(
  plaintext: string,
  key: CryptoKey,
): Promise<EncryptionEnvelope> {
  const subtle = getSubtle();
  const iv = randomBytes(IV_LENGTH);
  const encoder = new TextEncoder();

  const ciphertextBuf = await subtle.encrypt(
    { name: ALGORITHM, iv: asBuffer(iv) },
    key,
    encoder.encode(plaintext),
  );

  return {
    ciphertext: toBase64(ciphertextBuf),
    iv: toBase64(iv),
  };
}

export async function decryptContent(
  envelope: EncryptionEnvelope,
  key: CryptoKey,
): Promise<string> {
  const subtle = getSubtle();
  const iv = fromBase64(envelope.iv);
  const ciphertext = fromBase64(envelope.ciphertext);

  const plaintextBuf = await subtle.decrypt(
    { name: ALGORITHM, iv: asBuffer(iv) },
    key,
    asBuffer(ciphertext),
  );

  return new TextDecoder().decode(plaintextBuf);
}

export async function encryptToBase64(
  plaintext: string,
  key: CryptoKey,
): Promise<string> {
  const envelope = await encryptContent(plaintext, key);
  const combined = JSON.stringify({ c: envelope.ciphertext, v: envelope.iv });

  return toBase64(new TextEncoder().encode(combined));
}

export async function decryptFromBase64(
  encoded: string,
  key: CryptoKey,
): Promise<string> {
  const json = new TextDecoder().decode(fromBase64(encoded));
  const { c, v } = JSON.parse(json) as { c: string; v: string };

  return decryptContent({ ciphertext: c, iv: v }, key);
}

export { toBase64, fromBase64 };
