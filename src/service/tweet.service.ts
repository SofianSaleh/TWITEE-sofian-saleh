import TweetModel from '../models/tweet.sessio';

export const createNewTweet = async (tweet: any, user: any) => {
  try {
    tweet.owner = user;
    const newTweet = await TweetModel.create(tweet);
    return newTweet;
  } catch (e: any) {
    throw e;
  }
};
