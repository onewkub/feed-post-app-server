import { isNil } from "lodash";
import prisma from "../utils/prisma";

// Service สำหรับ สร้าง comment โดยรับ userId, postId และ comment
const createComment = async (
  userId: string,
  postId: string,
  comment: string
) => {

};


// Service สำหรับอัพเดท comment โดยรับ userId, postId และ comment
const updateComment = async (
  userId: string,
  commentId: string,
  comment: string
) => {

};

const commentService = {
  createComment,
  updateComment,
};

export default commentService;
