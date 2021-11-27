import TweetModel from '../models/tweet.model';
import mongoose from 'mongoose';
/**
 *
 * @param tweet {content: string}
 * @param user {_id: string, email: string, name: string, createdAt: string, updatedAt: string}
 * @returns A new tewwt with the schema of the Tweet Model
 */
export const createNewTweet = async (tweet: any, user: any) => {
  try {
    tweet.owner = user;
    const newTweet = await TweetModel.create(tweet);
    return newTweet;
  } catch (e: any) {
    throw e;
  }
};
/**
 *
 * @param userId string
 * @returns an array of tweets following the tweet model
 */
export const getTweets = async () => {
  try {
    return await TweetModel.find();
  } catch (e: any) {
    throw e;
  }
};
/**
 *
 * @param userId string
 * @returns an array of tweets following the tweet model
 */
export const getYourTweets = async (userId: string) => {
  try {
    return await TweetModel.find({ owner: userId });
  } catch (e: any) {
    throw e;
  }
};
/**
 *
 * @param tweetId string
 * @returns a single tweet | null
 */
export const getTweet = async (tweetId: string) => {
  try {
    return await TweetModel.findOne({ _id: tweetId })
      .populate('owner', 'email name')
      .exec();
  } catch (e: any) {
    throw e;
  }
};

export const updateTweet = async (
  tweetId: string,
  tweet: { content: string },
  user: any
) => {
  try {
    let oldTweet: any = await getTweet(tweetId);
    if (!oldTweet)
      return { success: false, data: null, msg: `Couldn't find tweet` };

    if (oldTweet.owner._id != user._id)
      return { success: false, data: null, msg: `Forbidden` };

    oldTweet.content = tweet.content;
    oldTweet.isEdited = true;
    await oldTweet.save();

    return { success: true, data: oldTweet, msg: `Updated Successfully` };
  } catch (e: any) {
    throw e;
  }
};

// ! Upgrade to soft delete instade of  earse
/**
 *
 * @param tweetId string
 * @param userId string
 * @returns return a tweet that got deleted | null
 */
export const deleteTweet = async (tweetId: string, userId: string) => {
  try {
    const tweet = await TweetModel.findOne({
      _id: tweetId,
      owner: userId,
    });
    if (!tweet) return null;
    await tweet?.remove();
    return tweet;
  } catch (e: any) {
    throw e;
  }
};
