import { Request, Response } from 'express';
import {
  createSession,
  getSessions,
  updateSessions,
} from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate user password
  console.log(req.body);
  const user = await validatePassword(req.body);
  if (!user) return res.status(401).send(`Invalid Email or password`);
  // Create a session
  const session = await createSession(user._id, req.get('user-agent') || '');
  // Create an accessToken
  const accessToken = signJwt({ ...user, session }, process.env.JWT1!, {
    expiresIn: process.env.accessTokenTtl!,
  });
  // Create an refreshToken

  const refreshToken = signJwt({ ...user, session }, process.env.JWT2!, {
    expiresIn: process.env.refreshTokenTtl!,
  }); // Return access and  refresh Token

  return res.status(200).send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await getSessions({ user: userId, valid: true });

  return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  await updateSessions({ _id: sessionId }, { valid: false });
  return res.status(200).send({ accessToken: null, refreshToken: null });
}
