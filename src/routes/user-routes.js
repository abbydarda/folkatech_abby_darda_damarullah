import express from 'express';
import { isAuthorized } from '../middlewares/auth-middlewares.js';
import { redisGetCache } from '../middlewares/cache-middlewares.js';
import { userControllers } from '../controllers/index.js';

const router = express.Router();

router.get('/', [isAuthorized, redisGetCache], userControllers.find);
router.get('/:id', [isAuthorized, redisGetCache], userControllers.findById);
router.get('/account-number/:accountNumber', [isAuthorized, redisGetCache], userControllers.findByAccountNumber);
router.get('/identity-number/:identityNumber', [isAuthorized, redisGetCache], userControllers.findByIdentityNumber);
router.post('/', [isAuthorized], userControllers.save);
router.put('/:id', [isAuthorized], userControllers.update);
router.delete('/:id', [isAuthorized], userControllers.remove);

export default router;
