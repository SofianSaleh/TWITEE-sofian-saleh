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
