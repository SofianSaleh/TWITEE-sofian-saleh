import { Request, NextFunction, Response } from 'express';
import { get } from 'lodash';
import { reIssueAccessToken } from '../service/session.service';
import { verifyJwt } from '../utils/jwt.utils';
import logger from '../utils/logger';
import 'dotenv/config';

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, 'headers.authorization', '').replace(
    /^Bearer\s/,
    ''
  );
  const refreshToken = get(req, 'headers.x-refresh', '');
  if (!accessToken) return next();

  const { decoded, expired } = verifyJwt(accessToken, process.env.JWT1!);

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }
  if (expired && !!refreshToken) {
    const newAccessToken = await reIssueAccessToken(refreshToken);
    if (!!newAccessToken) {
      res.setHeader('x-access-token', newAccessToken);

      const result = verifyJwt(newAccessToken, process.env.JWT1);

      res.locals.user = result.decoded;
      return next();
    }
  }
  return next();
};

export default deserializeUser;
