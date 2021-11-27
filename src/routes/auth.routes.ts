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

/**
 * @openapi
 * '/api/auth/signup':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post(`/signup`, validateResource(createUserSchema), createUserHandler);
router.post(
  `/login`,
  validateResource(createSessionSchema),
  createUserSessionHandler
);

router.get(`/sessions`, requireUser, getUserSessionsHandler);
router.delete(`/logout`, requireUser, deleteSessionHandler);

export default router;
