import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const app = express();
const port = config.get<number>('port');
app.use(express.json());

app.listen(port, async () => {
  await connect();
  logger.info(`Listening on port http://localhost:${port}`);
  routes(app);
});
