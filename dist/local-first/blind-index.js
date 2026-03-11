/**
 * Deterministic blind-index generation for E2E encrypted search.
 *
 * Produces HMAC-SHA256 tokens from plaintext content so the server
 * can perform keyword-style matching without ever seeing raw text.
 *
 * Uses only the Web Crypto API (no Node.js dependencies).
 */
function getSubtle() {
    return globalThis.crypto.subtle;
}
function toHex(buf) {
    const bytes = new Uint8Array(buf);
    let hex = "";
    for (let i = 0; i < bytes.length; i++)
        hex += bytes[i].toString(16).padStart(2, "0");
    return hex;
}
function asBuffer(arr) {
    const buf = new ArrayBuffer(arr.byteLength);
    new Uint8Array(buf).set(arr);
    return buf;
}
async function hmacSha256(key, data) {
    const subtle = getSubtle();
    const encoder = new TextEncoder();
    const sig = await subtle.sign("HMAC", key, encoder.encode(data));
    return toHex(sig);
}
export async function importBlindIndexKey(rawKeyBytes) {
    const subtle = getSubtle();
    return subtle.importKey("raw", asBuffer(rawKeyBytes), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
}
export async function deriveBlindIndexKey(passphrase, salt) {
    const subtle = getSubtle();
    const encoder = new TextEncoder();
    const baseKey = await subtle.importKey("raw", encoder.encode(passphrase), "PBKDF2", false, ["deriveBits"]);
    const bits = await subtle.deriveBits({
        name: "PBKDF2",
        salt: asBuffer(salt),
        iterations: 600_000,
        hash: "SHA-256",
    }, baseKey, 256);
    return subtle.importKey("raw", bits, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
}
function tokenize(text) {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .split(/\s+/)
        .filter((token) => token.length >= 2);
}
export async function generateBlindIndexTokens(content, key, maxTokens = 64) {
    const words = tokenize(content);
    const uniqueWords = [...new Set(words)].slice(0, maxTokens);
    const tokens = [];
    for (const word of uniqueWords) {
        const hash = await hmacSha256(key, word);
        tokens.push(hash.slice(0, 16));
    }
    return tokens;
}
export async function hashIdentifier(identifier, key) {
    const normalized = identifier.trim().toLowerCase();
    return hmacSha256(key, normalized);
}
