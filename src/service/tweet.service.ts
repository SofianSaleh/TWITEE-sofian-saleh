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
// ! Upgrade to soft delete instade of  earse
/**
 *
 * @param tweetId string
 * @param userId string
 * @returns return a tweet that got deleted | null
 */
export const deleteTweet = async (tweetId: string, userId: string) => {
  try {
    const tweet = await TweetModel.findOneAndDelete({
      _id: tweetId,
      owner: userId,
    });
    return tweet;
  } catch (e: any) {
    throw e;
  }
};
/**
 *
 * @param tweetId String
 * @param user {_id: string, email: string, name: string, createdAt: string, updatedAt: string}
 * @returns { success: false, msg: `Couldn't find tweet` } if couldn't find a tweet | { success: false, msg: `Already Liked` } If you are
 * already liked | { success: true, tweet, msg: `Liked Successfully` } If you liked a tweet
 */
export const likeTweet = async (tweetId: string, user: any) => {
  try {
    const tweet = await TweetModel.findOne({ _id: tweetId });
    if (!tweet) return { success: false, msg: `Couldn't find tweet` };
    if (tweet?.likedUser?.includes(user._id))
      return { success: false, msg: `Already Liked` };
    tweet?.likedUser?.push(user);
    await tweet.save();
    return { success: true, tweet, msg: `Liked Successfully` };
  } catch (e: any) {
    throw e;
  }
};
/**
 *
 * @param tweetId String
 * @returns The tweet with all the people who liked populated
 */
export const getAllLikesForTweet = async (tweetId: string) => {
  try {
    let tweet = await getTweet(tweetId);
    if (!tweet)
      return { success: false, tweet: null, msg: ` Couldn't find tweet` };
    let likes = await tweet?.populate('likedUser', 'name email');
    return { success: true, tweet: likes, msg: 'Populated All Likes' };
  } catch (e: any) {
    throw e;
  }
};
