import express from 'express';
import { createUserHandler } from '../controller/user.controller';
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
 *              $ref: '#/components/schemas/CommentsResponse'
 *      400:
 *        description: Bad request
 */
router.post(
  '/create/:id',
  requireUser,
  validateResource(createCommentSchema),
  createCommentHandler
);

router.get(`/:id`, requireUser, getCommentHandler);
router.get(`/all/:id`, requireUser, getAllCommentsOnTweetHandler);
router.put(
  '/update/:id',
  requireUser,
  validateResource(createCommentSchema),
  updateCommentHandler
);
router.delete(`/:id`, requireUser, deleteCommentHandler);
export default router;
