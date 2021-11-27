import { object, string } from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    CommentsResponse:
 *      type: object
 *      properties:
 *        content:
 *          type: string
 *        likedUser:
 *          items:
 *            type: string
 *        comments:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/CommentSchema'
 *        _id:
 *          type: string
 *        owner:
 *          $ref: '#/components/schemas/OwnerSchema'
 *        isEdited:
 *          type: boolean
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *        __v:
 *          type: integer
 *    OwnerSchema:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *    CommentSchema:
 *      type: object
 *      properties:
 *        content:
 *          type: string
 *        owner:
 *          type: string
 *        isEdited:
 *          type: boolean
 *        _id:
 *          type: string
 *        updatedAt:
 *          type: string
 *        createdAt:
 *          type: string
 *        __v:
 *          type: integer
 */
export const createCommentSchema = object({
  body: object({
    content: string({ required_error: 'Email is required' }),
  }),
});
