import redis from "../config/redis.js";

export async function getCache(key) {
    const str = await redis.get(key);
    return str ? JSON.parse(str) : null;
}

export async function setCache(key, data, ttl = 300) {
  // ttl mặc định 300s (5 phút)
    await redis.setex(key, ttl, JSON.stringify(data));
}
