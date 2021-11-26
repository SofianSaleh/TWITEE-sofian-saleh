import { Express, Response, Request } from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from './schema/session.schema';
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller';
import requireUser from './middleware/requireUser';

function routes(app: Express) {
  app.get(`/healthcheck`, (req: Request, res: Response) => {
    res.sendStatus(200);
  });
}

export default routes;
