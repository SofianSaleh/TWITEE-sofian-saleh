import { Request, Response } from 'express';
import {
  likeTweet,
  getAllLikesForTweet,
  unlikeTweet,
} from '../service/like.service';

export const likeTweetHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = res.locals.user;
    const tweet = await likeTweet(id, user);
    res.status(200).send(tweet);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

export const unlikeTweetHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = res.locals.user;
    const tweet = await unlikeTweet(id, user);
    res.status(200).send(tweet);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

export const getAllLikesTweetHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tweet = await getAllLikesForTweet(id);
    res.status(200).send(tweet);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
