import express from 'express';
import validateResource from '../middleware/validateResource';

import requireUser from '../middleware/requireUser';
import { createTweetSchema } from '../schema/tweet.schema';
import {
  createTweetHandler,
  deleteTweetHandler,
  getTweetHandler,
  getYourTweetsHandler,
  updateTweetHandler,
} from '../controller/tweets.controller';

const router = express.Router();
/**
 * @openapi
 * '/api/tweet/create':
 *  post:
 *     tags:
 *     - Tweet
 *     summary: Create a tweet
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateTweetInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTweetResponse'
 *      400:
 *        description: Bad request
 */
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
