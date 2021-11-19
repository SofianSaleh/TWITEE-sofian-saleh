import config from 'config';
import { Request, Response } from 'express';
import { createSession, getSessions } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate user password
  const user = await validatePassword(req.body);
  if (!user) return res.status(401).send(`Invalid Email or password`);
  // Create a session
  const session = await createSession(user._id, req.get('user-agent') || '');
  // Create an accessToken

  const accessToken = signJwt(
    { ...user, session: session.id },
    { expiresIn: config.get<string>('accessTokenTtl') }
  );
  // Create an refreshToken

  const refreshToken = signJwt(
    { ...user, session: session.id },
    { expiresIn: config.get<string>('refreshTokenTtl') }
  ); // Return access and  refresh Token

  return res.status(200).send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await getSessions({ user: userId, valid: false });

  return res.send(sessions);
}