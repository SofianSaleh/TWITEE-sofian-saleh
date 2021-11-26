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

//! do a route
export const getComment = async (commentId: string) => {
  try {
    const comment = await CommentModel.findOne({ _id: commentId }).populate(
      'owner',
      'name email'
    );
    if (!comment)
      return { success: false, msg: `Couldn't find comment`, comment: null };
    return { success: true, msg: `Found comment`, comment };
  } catch (e: any) {
    throw e;
  }
};

export const getAllCommentsOnTweet = async (tweetId: string) => {
  try {
    let tweet = await getTweet(tweetId);
    if (!tweet)
      return { success: false, msg: `Couldn't find tweet`, tweet: null };
    tweet = await tweet?.populate('comments', 'content owner isEdited');
    return { success: true, tweet, msg: `Found all the comments` };
  } catch (e: any) {
    throw e;
  }
};

export const updateComment = async (
  newContent: any,
  commentId: string,
  user: any
) => {
  try {
    let { success, comment, msg } = await getComment(commentId);
    if (!success) return { success, comment, msg };
    if (user._id != comment?.owner?.id)
      return { success: false, comment: null, msg: `Forbidden` };
    comment?.content = newContent.content;
    comment?.isEdited = true;
    await comment?.save();

    return { success: true, comment, msg: `Updated Successfully` };
  } catch (e: any) {
    throw e;
  }
};
