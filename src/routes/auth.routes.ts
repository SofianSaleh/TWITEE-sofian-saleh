import express from 'express';
import { createUserHandler } from '../controller/user.controller';
import validateResource from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';
import { createSessionSchema } from '../schema/session.schema';
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from '../controller/session.controller';
import requireUser from '../middleware/requireUser';
const router = express.Router();

router.post(`/signup`, validateResource(createUserSchema), createUserHandler);
router.post(
  `/login`,
  validateResource(createSessionSchema),
  createUserSessionHandler
);

app.get(`sessions`, requireUser, getUserSessionsHandler);
app.delete(`/logout`, requireUser, deleteSessionHandler);

export default router;
