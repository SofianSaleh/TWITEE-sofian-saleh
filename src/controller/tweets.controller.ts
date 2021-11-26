import { Request, Response } from 'express';
import { createNewTweet } from '../service/tweet.service';

export const createTweetHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user;
    const newTweet = await createNewTweet(req.body, user);
    res.status(200).send(newTweet);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
