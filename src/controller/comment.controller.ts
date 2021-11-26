import { Request, Response } from 'express';
import { createComment } from '../service/comment.service';

export const createCommentHandler = async (req: Request, res: Response) => {
  try {
    let user = res.locals.user;
    const { id } = req.params;
    const { tweet, newComment } = await createComment(req.body, id, user);
    console.log(newComment);
    return res.status(200).send({ success: true, tweet });
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
