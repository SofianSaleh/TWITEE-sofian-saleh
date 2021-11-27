import express from 'express';
import validateResource from '../middleware/validateResource';

import requireUser from '../middleware/requireUser';

import { createCommentSchema } from '../schema/comment.schema';
import {
  createCommentHandler,
  deleteCommentHandler,
  getAllCommentsOnTweetHandler,
  getCommentHandler,
  updateCommentHandler,
} from '../controller/comment.controller';
const router = express.Router();
/**
 * @openapi
 * '/api/comment/create/{id}':
 *  post:
 *     tags:
 *     - Comment
 *     summary: Comment on  a tweet
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
 *                tweet:
 *                  $ref: '#/components/schemas/CommentsResponse'
 *      400:
 *        description: Bad request
 */
router.post(
  '/create/:id',
  requireUser,
  validateResource(createCommentSchema),
  createCommentHandler
);

/**
 * @openapi
 * '/api/comment/{id}':
 *  get:
 *     tags:
 *     - Comment
 *     summary: Get comment with comment id
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 *       - name: id
 *         in: path
 *         descritpion: Comment id
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
 *                  $ref: '#/components/schemas/CommentWithUserSchema'
 *      400:
 *        description: Bad request
 */
router.get(`/:id`, requireUser, getCommentHandler);

/**
 * @openapi
 * '/api/comment/all/{id}':
 *  get:
 *     tags:
 *     - Comment
 *     summary: Get comment with comment id
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
 *                  $ref: '#/components/schemas/CommentsResponse1'
 *      400:
 *        description: Bad request
 */
router.get(`/all/:id`, requireUser, getAllCommentsOnTweetHandler);

/**
 * @openapi
 * '/api/comment/update/{id}':
 *  put:
 *     tags:
 *     - Comment
 *     summary: Comment on  a tweet
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 *       - name: id
 *         in: path
 *         descritpion: Comment id
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
 *                  $ref: '#/components/schemas/CommentWithUserSchema'
 *      400:
 *        description: Bad request
 */
router.put(
  '/update/:id',
  requireUser,
  validateResource(createCommentSchema),
  updateCommentHandler
);

/**
 * @openapi
 * '/api/comment/{id}':
 *  delete:
 *     tags:
 *     - Comment
 *     summary: Comment on  a tweet
 *     parameters:
 *       - name: x-refresh
 *         in: header
 *         descritpion: A refresh token that was created when you login
 *         require: true
 *         type: string
 *       - name: id
 *         in: path
 *         descritpion: Comment id
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
 *                  default: null
 *      400:
 *        description: Bad request
 */
router.delete(`/:id`, requireUser, deleteCommentHandler);
export default router;
