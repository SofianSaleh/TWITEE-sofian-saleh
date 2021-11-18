import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Name is required',
    }).min(6, ' Password Too short  - Should be 6 chars minimum'),
    passwordConfirm: string({
      required_error: 'Password confirm is required',
    }),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }).refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords does not match',
    path: ['passwordConfirm'],
  }),
});
export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  'body.passwordConfirm'
>;
