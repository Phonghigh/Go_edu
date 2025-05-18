import Redis from 'ioredis';

const redis = new Redis({
    host:   process.env.REDIS_HOST,
    port:   process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
    // db: 0,
    // retryStrategy: times => Math.min(times * 50, 2000)
});

export default redis;
