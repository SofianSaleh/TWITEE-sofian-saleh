import express from 'express';
import { createUserHandler } from '../controller/user.controller';
import validateResource from '../middleware/validateResource';

import requireUser from '../middleware/requireUser';

import { createCommentSchema } from '../schema/comment.schema';
import { createCommentHandler } from '../controller/comment.controller';
const router = express.Router();

router.post(
  '/create/:id',
  requireUser,
  validateResource(createCommentSchema),
  createCommentHandler
);

export default router;
