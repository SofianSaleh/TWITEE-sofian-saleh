import { object, string } from 'zod';
/**
 * @openapi
 * components:
 *  schemas:
 *    LoginUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    LoginUserResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          type: string
 *        refreshToken:
 *          type: string
 */
export const createSessionSchema = object({
  body: object({
    email: string({ required_error: 'Email is required' }),
    password: string({ required_error: 'Password is required' }),
  }),
});
