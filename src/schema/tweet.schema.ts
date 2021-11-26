import { object, string } from 'zod';

export const createTweetSchema = object({
  body: object({
    content: string({ required_error: 'Email is required' }),
  }),
});
