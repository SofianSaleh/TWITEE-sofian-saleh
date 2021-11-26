import { Request, Response } from 'express';
import { omit } from 'lodash';
import { CreateUserInput } from '../schema/user.schema';
import sendMail from '../service/nodemailer.service';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';
export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    const { success } = await sendMail({ email: user.email, name: user.name });
    return res.send({ user, success });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};
