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
function getSubtle() {
    return globalThis.crypto.subtle;
}
function randomBytes(length) {
    const buf = new Uint8Array(length);
    globalThis.crypto.getRandomValues(buf);
    return buf;
}
function toBase64(buf) {
    const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    let binary = "";
    for (let i = 0; i < bytes.length; i++)
        binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
}
function fromBase64(str) {
    const binary = atob(str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++)
        bytes[i] = binary.charCodeAt(i);
    return bytes;
}
function asBuffer(arr) {
    const buf = new ArrayBuffer(arr.byteLength);
    new Uint8Array(buf).set(arr);
    return buf;
}
export async function deriveKeyFromPassphrase(passphrase, salt) {
    const subtle = getSubtle();
    const actualSalt = salt ?? randomBytes(SALT_LENGTH);
    const encoder = new TextEncoder();
    const baseKey = await subtle.importKey("raw", encoder.encode(passphrase), "PBKDF2", false, ["deriveKey"]);
    const derivedKey = await subtle.deriveKey({
        name: "PBKDF2",
        salt: asBuffer(actualSalt),
        iterations: PBKDF2_ITERATIONS,
        hash: "SHA-256",
    }, baseKey, { name: ALGORITHM, length: KEY_LENGTH }, false, ["encrypt", "decrypt"]);
    return { key: derivedKey, salt: actualSalt };
}
export async function importRawKey(rawKeyBytes) {
    const subtle = getSubtle();
    return subtle.importKey("raw", asBuffer(rawKeyBytes), { name: ALGORITHM, length: KEY_LENGTH }, false, ["encrypt", "decrypt"]);
}
export async function encryptContent(plaintext, key) {
    const subtle = getSubtle();
    const iv = randomBytes(IV_LENGTH);
    const encoder = new TextEncoder();
    const ciphertextBuf = await subtle.encrypt({ name: ALGORITHM, iv: asBuffer(iv) }, key, encoder.encode(plaintext));
    return {
        ciphertext: toBase64(ciphertextBuf),
        iv: toBase64(iv),
    };
}
export async function decryptContent(envelope, key) {
    const subtle = getSubtle();
    const iv = fromBase64(envelope.iv);
    const ciphertext = fromBase64(envelope.ciphertext);
    const plaintextBuf = await subtle.decrypt({ name: ALGORITHM, iv: asBuffer(iv) }, key, asBuffer(ciphertext));
    return new TextDecoder().decode(plaintextBuf);
}
export async function encryptToBase64(plaintext, key) {
    const envelope = await encryptContent(plaintext, key);
    const combined = JSON.stringify({ c: envelope.ciphertext, v: envelope.iv });
    return toBase64(new TextEncoder().encode(combined));
}
export async function decryptFromBase64(encoded, key) {
    const json = new TextDecoder().decode(fromBase64(encoded));
    const { c, v } = JSON.parse(json);
    return decryptContent({ ciphertext: c, iv: v }, key);
}
export { toBase64, fromBase64 };
