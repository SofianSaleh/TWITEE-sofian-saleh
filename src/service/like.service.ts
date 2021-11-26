import TweetModel from '../models/tweet.model';
import { getTweet } from './tweet.service';

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

export const unlikeTweet = async (tweetId: string, user: any) => {
  try {
    const tweet = await TweetModel.findOne(
      { _id: tweetId, likedUser: user._id },
      { $pull: { likedUser: user._id } }
    );

    if (!tweet) return { success: false, msg: `Couldn't find tweet` };

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
