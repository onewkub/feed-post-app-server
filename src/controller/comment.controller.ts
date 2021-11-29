import { user } from ".prisma/client";
import { Request, Response } from "express";
import commentForm from "../models/commentForm";
import commentService from "../service/comment.service";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";


const createComment = async (req: Request, res: Response) => {
  const user = req.user as user;
  const postId = req.params.postId as string;
  const { comment } = req.body as commentForm;

  try {
    const result = await commentService.createComment(user.userId, postId, comment);
    OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

const updateComment = async (req: Request, res: Response) => {
  const user = req.user as user;
  const commentId = req.params.commentId as string;
  const { comment } = req.body as commentForm;
  try {
    const result = await commentService.updateComment(
      user.userId,
      commentId,
      comment
    );
    OK(res, result);
  } catch (error) {
    if (error instanceof Error) {
      BAD_REQUEST(res, error.message);
    } else {
      INTERNAL_ERROR(res);
    }
  }
};

const commentController = { createComment, updateComment };

export default commentController;
