import express from 'express';
import { createUserHandler } from '../controller/user.controller';
import validateResource from '../middleware/validateResource';

import requireUser from '../middleware/requireUser';
import { createTweetSchema } from '../schema/tweet.schema';
import { createTweetHandler } from '../controller/tweets.controller';
const router = express.Router();

router.post(
  '/create',
  requireUser,
  validateResource(createTweetSchema),
  createTweetHandler
);

export default router;
