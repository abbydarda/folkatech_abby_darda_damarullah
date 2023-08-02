import logger from '../applications/logging.js';
import redisClient from '../applications/redis.js';

const getCache = async (key) => {
 try {
  const data = await redisClient.get(key);
  return JSON.parse(data);
 } catch (error) {
  logger.error(`Tidak dapat memporses pengambilan cache`);
 }
};
const setCache = async (key, value) => {
 try {
  return await redisClient.set(key, JSON.stringify(value));
 } catch (error) {
  logger.error(`Tidak dapat memporses penambahan cache`);
 }
};
const deleteCache = async (key) => {
 try {
  return await redisClient.del(key);
 } catch (error) {
  logger.error(`Tidak dapat memporses penghapusan cache`);
 }
};

export default { getCache, setCache, deleteCache };
