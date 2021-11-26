import CommentModel from '../models/comment.model';
import { getTweet } from './tweet.service';

export const createComment = async (
  comment: any,
  tweetId: string,
  user: any
) => {
  try {
    comment.owner = user;
    let tweet = await getTweet(tweetId);
    if (!tweet)
      return { success: false, tweet: null, msg: `Couldn't find tweet` };
    const newComment = await CommentModel.create(comment);
    tweet?.comments?.push(newComment);
    await tweet.save();
    return {
      success: true,
      tweet,
      newComment,
      msg: `Comment creaeted Successfully`,
    };
  } catch (e: any) {
    throw e;
  }
};
