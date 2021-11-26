import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

import deserializeUser from './middleware/deserializeUser';

import AuthRoutes from './routes/auth.routes';
const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());

app.use(deserializeUser);

app.use(`/api/auth`, AuthRoutes);

app.listen(port, async () => {
  await connect();
  logger.info(`Listening on port http://localhost:${port}`);
});
