import { object, string } from 'zod';

export const createCommentSchema = object({
  body: object({
    content: string({ required_error: 'Email is required' }),
  }),
});
