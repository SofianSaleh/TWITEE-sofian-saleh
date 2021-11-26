import { Request, Response } from 'express';
import {
  createComment,
  getAllCommentsOnTweet,
} from '../service/comment.service';

export const createCommentHandler = async (req: Request, res: Response) => {
  try {
    let user = res.locals.user;
    const { id } = req.params;
    const newComment = await createComment(req.body, id, user);

    return res.status(200).send(newComment);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

export const getAllCommentsOnTweetHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const comments = await getAllCommentsOnTweet(id);
    return res.status(200).send(comments);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
