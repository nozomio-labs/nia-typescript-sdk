export async function withRetries(fn, config) {
    let lastError;
    for (let attempt = 0; attempt <= config.maxRetries; attempt += 1) {
        try {
            return await fn();
        }
        catch (error) {
            lastError = error;
            if (attempt >= config.maxRetries)
                break;
            const delay = config.initialBackoffMs * 2 ** attempt;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
    throw lastError;
}
