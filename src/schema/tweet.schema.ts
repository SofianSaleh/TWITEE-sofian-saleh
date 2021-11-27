import { object, string } from 'zod';
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateTweetInput:
 *      type: object
 *      required:
 *        - content
 *      properties:
 *        content:
 *          type: string
 *          default: Hello World
 *    CreateTweetResponse:
 *      type: object
 *      properties:
 *        content:
 *          type: string
 *        likedUser:
 *          type: array
 *          items:
 *            type: string
 *        comments:
 *          type: array
 *          items:
 *            type: string
 *        _id:
 *          type: string
 *        isEdited:
 *          type: boolean
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *        __v:
 *          type: integer
 */
export const createTweetSchema = object({
  body: object({
    content: string({ required_error: 'Email is required' }),
  }),
});
