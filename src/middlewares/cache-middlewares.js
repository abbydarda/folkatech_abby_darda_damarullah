import { cacheUtils } from '../utils/index.js';

const redisGetCache = async (req, res, next) => {
 const key = req.originalUrl;

 const isCacheDataExist = await cacheUtils.getCache(key);

 if (isCacheDataExist) {
  return res.status(200).json({
   isCache: true,
   message: 'Data cache berhasil diambil',
   data: isCacheDataExist,
  });
 }

 next();
};

export { redisGetCache };
