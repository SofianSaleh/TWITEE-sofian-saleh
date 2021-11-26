import jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from './logger';

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  // The algorith RS256 allows to use public and private keys

  return jwt.sign(object, process.env.privateKey!, {
    ...(options && options),
    algorithm: 'RS256',
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.publicKey!, {
      algorithms: ['RS256'],
    });
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
