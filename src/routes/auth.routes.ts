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

/**
 * @openapi
 * '/api/auth/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Login a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/LoginUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post(
  `/login`,
  validateResource(createSessionSchema),
  createUserSessionHandler
);
/**
 * @openapi
 * '/api/auth/sessions':
 *  get:
 *     tags:
 *     - User
 *     summary: Get all user's sessions
 *     security:
 *       - bearerAuth[]:
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
 *              $ref: '#/components/schemas/LoginUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */

router.get(`/sessions`, requireUser, getUserSessionsHandler);
router.delete(`/logout`, requireUser, deleteSessionHandler);

export default router;
