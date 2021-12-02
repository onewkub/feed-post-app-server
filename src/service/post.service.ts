import { isNil } from "lodash";
import PostForm from "../models/postForm";
import prisma from "../utils/prisma";

const getPostByUser = async (userId: string) => {
  try {
    const result = await prisma.post.findMany({
      where: { createdUserId: userId },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getPost = async (postId: string) => {
  try {
    const result = await prisma.post.findUnique({
      where: { postId },
      include: {
        comment: {
          select: {
            createdOn: true,
            comment: true,
            createdUser: {
              select: {
                username: true,
                profile: { select: { name: true, profileImage: true } },
              },
            },
          },
        },
      },
    });
    if (isNil(result)) throw new Error("Can't find post from giving postId.");
    return result;
  } catch (error) {
    throw error;
  }
};
// Service สำหรับสร้าง Post โดยรับ Parameter เป็น postForm และ userId ของผู้สร้าง 
const createPost = async (postForm: PostForm, userId: string) => {

};

// Service สำหรับ Update Post โดยรับ Parameter เป็น postForm และ userId ของผู้สร้าง 
const updatePost = async (
  postId: string,
  postFrom: PostForm,
  userId: string
) => {

};

// Service สำหรับ กด Love ต่อโพสรับ Parameter เป็น userId และ postId
const lovePost = async (userId: string, postId: string) => {

};

// Service สำหรับ กด UnLove ต่อโพสรับ Parameter เป็น userId และ postId
const unLovePost = async (userId: string, postId: string) => {

};


// Service สำหรับกด Repost ต่อโพสรับ Parameter เป็น userId และ postId
const rePost = async (userId: string, postId: string) => {

};
// Service สำหรับกด Un Repost ต่อโพสรับ Parameter เป็น userId และ postId

const unRePost = async (userId: string, postId: string) => {

};

const postService = {
  createPost,
  getPost,
  updatePost,
  getPostByUser,
  lovePost,
  unLovePost,
  rePost,
  unRePost,
};

export default postService;
