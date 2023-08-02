import express from 'express';
import tokenRoutes from './token-routes.js';
import usersRouter from './user-routes.js';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/token', tokenRoutes);

export default router;
