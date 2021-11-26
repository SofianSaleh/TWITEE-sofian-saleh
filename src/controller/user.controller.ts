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
    const emailSend = await sendMail({email: user.email, name: user.name})
    console.log(emailSend)
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};
