import config from './config.js';
import logger from './logging.js';
import redis from 'redis';

const redisClient = redis.createClient({ url: config.REDIS_URI });

redisClient
 .connect()
 .then(async (res) => {
  logger.info('Redis Connected');
 })
 .catch((err) => {
  logger.error(err);
 });
export default redisClient;
