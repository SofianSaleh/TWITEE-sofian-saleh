import { Request, Response } from 'express';
import {
  createNewTweet,
  getYourTweets,
  getTweet,
  deleteTweet,
  likeTweet,
} from '../service/tweet.service';

export const createTweetHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user;
    const newTweet = await createNewTweet(req.body, user);
    res.status(200).send(newTweet);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

export const getYourTweetsHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user;
    const yourTweets = await getYourTweets(user._id);
    res.status(200).send({ count: yourTweets.length, tweets: yourTweets });
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

export const getTweetHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tweet = await getTweet(id);
    res.status(200).send({ count: 1, tweet });
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

export const deleteTweetHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = res.locals.user;
    const tweet = await deleteTweet(id, user._id);
    console.log(tweet);
    res
      .status(200)
      .send({ count: tweet ? 1 : 0, tweet, success: tweet ? true : false });
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

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
