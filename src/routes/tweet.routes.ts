import express from 'express';
import validateResource from '../middleware/validateResource';

import requireUser from '../middleware/requireUser';
import { createTweetSchema } from '../schema/tweet.schema';
import {
  createTweetHandler,
  deleteTweetHandler,
  getAllLikesTweetHandler,
  getTweetHandler,
  getYourTweetsHandler,
  likeTweetHandler,
  updateTweetHandler,
} from '../controller/tweets.controller';

const router = express.Router();

router.post(
  '/create',
  requireUser,
  validateResource(createTweetSchema),
  createTweetHandler
);

router.get('/mytweets', requireUser, getYourTweetsHandler);
router.get('/:id', requireUser, getTweetHandler);
router.put(
  '/update/:id',
  requireUser,
  validateResource(createTweetSchema),
  updateTweetHandler
);
router.delete('/:id', requireUser, deleteTweetHandler);

export default router;
