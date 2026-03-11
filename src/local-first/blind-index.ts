/**
 * Deterministic blind-index generation for E2E encrypted search.
 *
 * Produces HMAC-SHA256 tokens from plaintext content so the server
 * can perform keyword-style matching without ever seeing raw text.
 *
 * Uses only the Web Crypto API (no Node.js dependencies).
 */

function getSubtle(): SubtleCrypto {
  return globalThis.crypto.subtle;
}

function toHex(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let hex = "";
  for (let i = 0; i < bytes.length; i++) hex += bytes[i]!.toString(16).padStart(2, "0");
  return hex;
}

function asBuffer(arr: Uint8Array): ArrayBuffer {
  const buf = new ArrayBuffer(arr.byteLength);
  new Uint8Array(buf).set(arr);
  return buf;
}

async function hmacSha256(key: CryptoKey, data: string): Promise<string> {
  const subtle = getSubtle();
  const encoder = new TextEncoder();
  const sig = await subtle.sign("HMAC", key, encoder.encode(data));
  return toHex(sig);
}

export async function importBlindIndexKey(
  rawKeyBytes: Uint8Array,
): Promise<CryptoKey> {
  const subtle = getSubtle();
  return subtle.importKey(
    "raw",
    asBuffer(rawKeyBytes),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

export async function deriveBlindIndexKey(
  passphrase: string,
  salt: Uint8Array,
): Promise<CryptoKey> {
  const subtle = getSubtle();
  const encoder = new TextEncoder();

  const baseKey = await subtle.importKey(
    "raw",
    encoder.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const bits = await subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: asBuffer(salt),
      iterations: 600_000,
      hash: "SHA-256",
    },
    baseKey,
    256,
  );

  return subtle.importKey(
    "raw",
    bits,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 2);
}

export async function generateBlindIndexTokens(
  content: string,
  key: CryptoKey,
  maxTokens = 64,
): Promise<string[]> {
  const words = tokenize(content);
  const uniqueWords = [...new Set(words)].slice(0, maxTokens);
  const tokens: string[] = [];

  for (const word of uniqueWords) {
    const hash = await hmacSha256(key, word);
    tokens.push(hash.slice(0, 16));
  }

  return tokens;
}

export async function hashIdentifier(
  identifier: string,
  key: CryptoKey,
): Promise<string> {
  const normalized = identifier.trim().toLowerCase();
  return hmacSha256(key, normalized);
}
