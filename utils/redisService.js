const Redis = require('ioredis');


const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'redis_password';

const redisClient = new Redis({
    host: REDIS_HOST, 
    port: REDIS_PORT, 
    password: REDIS_PASSWORD 
});

async function setValue(id, longUrl) {
    try {
        await redisClient.set(id, longUrl,"EX", 60 * 60 * 24 * 30);
        return { id, longUrl };
    } catch (error) {
        console.error('Error setting value in Redis:', error);
        throw error;
    }
}

async function getValue(id) {
        try {
            const value = await redisClient.get(id);
            return value;
        } catch (error) {
            console.error('Error getting value from Redis:', error);
            throw error;
        }
    }


module.exports = { setValue , getValue };
