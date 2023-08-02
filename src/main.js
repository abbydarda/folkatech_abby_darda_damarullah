import app from './applications/app.js';
import config from './applications/config.js';
import logger from './applications/logging.js';

app.listen(3001, () => logger.info(`App start on ${config.APP_PORT}`));
