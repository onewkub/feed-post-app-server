import { isNil } from "lodash";
import prisma from "../utils/prisma";

// Service สำหรับ สร้าง comment โดยรับ userId, postId และ comment
const createComment = async (
  userId: string,
  postId: string,
  comment: string
) => {
  try {
    const result = await prisma.comment.create({
      data: { createdUserId: userId, postId, comment },
    });
    return result;
  } catch (error) {
    console.log(error)
    throw error;
  }
};


// Service สำหรับอัพเดท comment โดยรับ userId, postId และ comment
const updateComment = async (
  userId: string,
  commentId: string,
  comment: string
) => {
  try {
    const existingComment = await prisma.comment.findFirst({
      where: {
        createdUserId: userId,
        commentId,
      },
    });
    if (!isNil(existingComment)) {
      const result = await prisma.comment.update({
        where: { commentId },
        data: { ...existingComment, comment },
      });
      return result;
    } else {
      throw new Error("Can't find comment with giving commentId");
    }
  } catch (error) {
    throw error;
  }
};

const commentService = {
  createComment,
  updateComment,
};

export default commentService;
