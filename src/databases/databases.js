import config from '../applications/config.js';
import logger from '../applications/logging.js';
import mongoose from 'mongoose';

const db = async () => {
 await mongoose.connect(config.DB_URI);
 logger.info('Database connected');
};

db();
export default db;
