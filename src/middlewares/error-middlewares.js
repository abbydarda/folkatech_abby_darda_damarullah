import { ResponseError } from '../errors/response-errors.js';
import logger from '../applications/logging.js';

const errorMiddleware = (err, req, res, next) => {
 logger.error({ status: err.status, message: err.message });
 if (!err) {
  next();
  return;
 }

 if (err instanceof ResponseError) {
  res.status(err.status).json({ errors: err.message });
 } else {
  res.status(500).json({ errors: 'Maaf sepertinya sistem sedang bermasalah' });
 }
};

export { errorMiddleware };
