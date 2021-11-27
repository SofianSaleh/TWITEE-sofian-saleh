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
/**
 * @openapi
 * '/api/tweet/mytweets':
 *  get:
 *     tags:
 *     - Tweet
 *     summary: Get all of your tweets
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                count:
 *                  type: integer
 *                tweets:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/CreateTweetResponse'
 *      400:
 *        description: Bad request
 */
router.get('/mytweets', requireUser, getYourTweetsHandler);
/**
 * @openapi
 * '/api/tweet/{id}':
 *  get:
 *     tags:
 *     - Tweet
 *     summary: Get A tweet by id
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 *       - name: id
 *         in: path
 *         descritpion: Tweet id
 *         require: true
 *         type: string
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                count:
 *                  type: integer
 *                tweet:
 *                  $ref: '#/components/schemas/CreateTweetResponse'
 *      400:
 *        description: Bad request
 */
router.get('/:id', requireUser, getTweetHandler);

/**
 * @openapi
 * '/api/tweet/update/{id}':
 *  put:
 *     tags:
 *     - Tweet
 *     summary: Update a tweet
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 *       - name: id
 *         in: path
 *         descritpion: Tweet id
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
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                msg:
 *                  type: string
 *                data:
 *                  $ref: '#/components/schemas/CreateTweetResponse'
 *      400:
 *        description: Bad request
 */
router.put(
  '/update/:id',
  requireUser,
  validateResource(createTweetSchema),
  updateTweetHandler
);

/**
 * @openapi
 * '/api/tweet/{id}':
 *  delete:
 *     tags:
 *     - Tweet
 *     summary: Delete a tweet
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 *       - name: id
 *         in: path
 *         descritpion: Tweet id
 *         require: true
 *         type: string
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                msg:
 *                  type: string
 *                data:
 *                  $ref: '#/components/schemas/CreateTweetResponse'
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                msg:
 *                  type: string
 *                data:
 *                  type: string
 *                  default: null
 */
router.delete('/:id', requireUser, deleteTweetHandler);

export default router;
