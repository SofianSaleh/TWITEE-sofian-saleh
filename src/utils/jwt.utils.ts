import jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from './logger';

export function signJwt(
  object: Object,
  secret: any,
  options?: jwt.SignOptions | undefined
) {
  // The algorith RS256 allows to use public and private keys

  return jwt.sign(object, secret, {
    ...(options && options),
  });
}

export function verifyJwt(token: string, secret: any) {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    };
  }
}
