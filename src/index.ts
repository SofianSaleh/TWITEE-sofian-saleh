import express, { Request, Response } from 'express';
import connect from './utils/connect';
import logger from './utils/logger';

import deserializeUser from './middleware/deserializeUser';

import AuthRoutes from './routes/auth.routes';
import TweetRoutes from './routes/tweet.routes';
import CommentRoutes from './routes/comment.routes';
import LikeRoutes from './routes/like.routes';
import swaggerDocs from './utils/swagger';

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());

app.use(deserializeUser);
app.get(`/healthcheck`, (req: Request, res: Response) => res.sendStatus(200));
app.use(`/api/auth`, AuthRoutes);
app.use(`/api/tweet`, TweetRoutes);
app.use(`/api/comment`, CommentRoutes);
app.use(`/api/like`, LikeRoutes);

app.listen(port, async () => {
  await connect();
  swaggerDocs(app, port);
  logger.info(`Listening on port http://localhost:${port}`);
});
