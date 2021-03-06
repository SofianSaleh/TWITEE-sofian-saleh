import { Request, Response } from 'express';
import {
  createComment,
  deleteComment,
  getAllCommentsOnTweet,
  getComment,
  updateComment,
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

export const getCommentHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comment = await getComment(id);
    res.status(200).send(comment);
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

export const updateCommentHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = res.locals.user;
    const comments = await updateComment(req.body, id, user);
    return res.status(200).send(comments);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

export const deleteCommentHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = res.locals.user;
    const comment = await deleteComment(id, user);
    return res.status(200).send(comment);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
