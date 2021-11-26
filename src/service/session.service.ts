import { FilterQuery, UpdateQuery } from 'mongoose';
import SessionModel, { SessionDocument } from '../models/session.model';
import { verifyJwt, signJwt } from '../utils/jwt.utils';
import { get } from 'lodash';
import 'dotenv/config';
import { findUser } from './user.service';

export async function createSession(userId: string, userAgent: string) {
  const session = await (
    await SessionModel.create({ user: userId, userAgent })
  ).get('_id');
  return session;
}

export async function getSessions(query: FilterQuery<SessionDocument>) {
  return await SessionModel.find(query).lean();
}

export async function updateSessions(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return await SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken(refreshToken: string) {
  // Verify refreshToken
  const { decoded, expired } = verifyJwt(refreshToken, process.env.JWT2!);
  // If valid return a new access  Token
  if (!decoded && get(decoded, 'session')) return false;

  const session = await SessionModel.findById(get(decoded, 'session'));

  if (!session || !session.valid) return false;

  const user = await findUser({ _id: session.user });
  if (!user) return false;
  let x = { ...user };
  const accessToken = signJwt(
    { ...user, session: session._id },
    process.env.JWT1!,
    { expiresIn: process.env.accessTokenTtl! }
  );

  return accessToken;
}
