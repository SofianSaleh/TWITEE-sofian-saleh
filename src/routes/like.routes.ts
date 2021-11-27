import express from 'express';

import requireUser from '../middleware/requireUser';
import {
  getAllLikesTweetHandler,
  likeTweetHandler,
  unlikeTweetHandler,
} from '../controller/like.controller';

const router = express.Router();
/**
 * @openapi
 * '/api/like/{id}':
 *  post:
 *     tags:
 *     - Like
 *     summary: Like a tweet
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
 *                tweets:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/CreateTweetResponse'
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
 */
router.post('/:id', requireUser, likeTweetHandler);
/**
 * @openapi
 * '/api/like/unlike/{id}':
 *  post:
 *     tags:
 *     - Like
 *     summary: unlike a tweet
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
 *                tweets:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/CreateTweetResponse'
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
 */
router.post('/unlike/:id', requireUser, unlikeTweetHandler);
/**
 * @openapi
 * '/api/like/{id}':
 *  get:
 *     tags:
 *     - Like
 *     summary: Get all users who liked a tweet
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
 *                tweet:
 *                    $ref: '#/components/schemas/AllLikedTweetResponse'
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
 */
router.get('/:id', requireUser, getAllLikesTweetHandler);

export default router;
