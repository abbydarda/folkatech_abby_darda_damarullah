import express from 'express';
import { jwtUtils } from '../utils/index.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/', [], async (req, res) =>
 res.status(200).json({ message: 'Generate token berhasil', data: { token: jwtUtils.generate({ sub: new mongoose.mongo.ObjectId() }) } }),
);

export default router;
