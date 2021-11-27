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
    let newComment = await CommentModel.create(comment);
    tweet?.comments?.push(newComment);
    await tweet.save();
    newComment = await newComment.populate('owner', 'name email');
    return {
      success: true,
      tweet,
      commentOwner: newComment.owner,
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
      return { success: false, msg: `Couldn't find comment`, data: null };
    return { success: true, msg: `Found comment`, data: comment };
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
    let { success, data, msg }: any = await getComment(commentId);
    if (!success && !data) return { success, data, msg };

    if (!data?.owner)
      return { success: false, msg: `User Doesn't exist`, data: null };
    if (user._id != data?.owner?._id)
      return { success: false, data: null, msg: `Forbidden` };
    data.content = newContent.content;
    data.isEdited = true;
    await data?.save();

    return { success: true, data, msg: `Updated Successfully` };
  } catch (e: any) {
    throw e;
  }
};

export const deleteComment = async (commentId: string, user: any) => {
  try {
    let comment: any = await getComment(commentId);

    if (!comment.success && !comment.data) return comment;

    if (!comment?.data?.owner)
      return { success: false, msg: `User Doesn't exist`, data: null };

    // Check if the id of the comment owner is the same as the one who wants to delete it
    if (user._id != comment.data.owner._id)
      return { success: false, comment: null, msg: `Forbidden` };

    await comment.data.remove();

    return {
      success: true,
      data: null,
      msg: `Deleted Successfully`,
    };
  } catch (e: any) {
    throw e;
  }
};
