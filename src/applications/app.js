import '../databases/databases.js';

import { errorMiddleware } from '../middlewares/error-middlewares.js';
import express from 'express';
import router from '../routes/index.js';
import swaggerDocs from './swagger.js';
import swaggerUiExpress from 'swagger-ui-express';

const app = express();

app.use(express.json());
app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));
app.use('/api', router);

app.use(errorMiddleware);

export default app;
