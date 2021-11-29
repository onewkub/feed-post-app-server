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

const createPost = async (postForm: PostForm, userId: string) => {
  try {
    const content = postForm.content;
    const images = postForm.images || [];
    const contentResult = await prisma.post.create({
      data: {
        content,
        createdUserId: userId,
      },
    });
    const imageResult = await Promise.all(
      images.map((image) => {
        return prisma.postImage.create({
          data: {
            userId,
            postId: contentResult.postId,
            data: image.data,
            order: image.order,
          },
        });
      })
    );

    return {
      ...contentResult,
      postImage: [...imageResult],
    };
  } catch (error) {
    throw error;
  }
};

const updatePost = async (
  postId: string,
  postFrom: PostForm,
  userId: string
) => {
  try {
    const content = postFrom.content;

    const isExisting = await prisma.post.findFirst({
      where: { postId, createdUserId: userId },
    });

    if (isNil(isExisting)) {
      throw new Error("can't not find your post for updating.");
    } else {
      const result = prisma.post.update({
        data: { ...isExisting, content },
        where: { postId },
      });
      return result;
    }
  } catch (e) {
    const error = e as any;
    console.error(error.message);
    throw error;
  }
};

const lovePost = async (userId: string, postId: string) => {
  try {
    const result = await prisma.lovePost.create({ data: { userId, postId } });
    return result;
  } catch (error) {
    throw error;
  }
};

const unLovePost = async (userId: string, postId: string) => {
  try {
    await prisma.lovePost.delete({
      where: {
        postId_userId: {
          userId,
          postId,
        },
      },
    });
  } catch (error) {
    throw error;
  }
};

const rePost = async (userId: string, postId: string) => {
  try {
    const result = await prisma.rePost.create({ data: { userId, postId } });
    return result;
  } catch (error) {
    throw error;
  }
};

const unRePost = async (userId: string, postId: string) => {
  try {
    await prisma.rePost.delete({
      where: {
        postId_userId: {
          userId,
          postId,
        },
      },
    });
  } catch (error) {
    throw error;
  }
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
