interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const ipStore = new Map<string, RateLimitEntry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // Max 5 submissions per 10-minute window per IP

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetInSeconds: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();

  // Opportunistic cleanup of expired keys
  ipStore.forEach((entry, key) => {
    if (entry.resetAt <= now) {
      ipStore.delete(key);
    }
  });

  const existing = ipStore.get(ip);
  if (!existing || existing.resetAt <= now) {
    ipStore.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      resetInSeconds: Math.ceil(WINDOW_MS / 1000),
    };
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetInSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  ipStore.set(ip, existing);

  return {
    allowed: true,
    remaining: MAX_REQUESTS - existing.count,
    resetInSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  };
}
