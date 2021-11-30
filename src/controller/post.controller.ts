import { user } from ".prisma/client";
import { Request, Response } from "express";
import PostForm from "../models/postForm";
import postService from "../service/post.service";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";


// controller สำหรับรับ Reqeust เรียก Post ของ User คนปัจจุบันทั้งหมด
const getCurrentUserPost = async (req: Request, res: Response) => {
  const user = req.user as user;
  try {
    const result = await postService.getPostByUser(user.userId);
    OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

// controller สำหรับรับ Request เรียก Post จาก postId

const getPost = async (req: Request, res: Response) => {
  const postId = req.params.postId as string;
  try {
    const result = await postService.getPost(postId);
    OK(res, result);
  } catch (error) {
    if (error instanceof Error) {
      BAD_REQUEST(res, error.message);
    } else {
      INTERNAL_ERROR(res);
    }
  }
};

// controller สำหรับรับ Request เพื่อ สร้าง Post
const createPost = async (req: Request, res: Response) => {
  const postForm = req.body as PostForm;
  const user = req.user as user;
  try {
    const result = await postService.createPost(postForm, user.userId);
    OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

// controller สำหรับรับ Request เพื่อ Update Post

const updatePost = async (req: Request, res: Response) => {
  const postForm = req.body as PostForm;
  const postId = req.params.postId as string;
  const user = req.user as user;

  try {
    const result = await postService.updatePost(postId, postForm, user.userId);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      BAD_REQUEST(res, error.message);
    } else {
      INTERNAL_ERROR(res);
    }
  }
};


// controller สำหรับรับ Request สำหรับ Action love

const lovePost = async (req: Request, res: Response) => {
  const user = req.user as user;
  const postId = req.params.postId as string;

  try {
    const result = await postService.lovePost(user.userId, postId);
    OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};


// controller สำหรับรับ Request สำหรับ Action unloved

const unLovePost = async (req: Request, res: Response) => {
  const user = req.user as user;
  const postId = req.params.postId as string;

  try {
    await postService.unLovePost(user.userId, postId);
    OK(res, "OK");
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};


// controller สำหรับรับ Request สำหรับ Action rePost

const rePost = async (req: Request, res: Response) => {
  const user = req.user as user;
  const postId = req.params.postId as string;

  try {
    const result = await postService.rePost(user.userId, postId);
    OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

// controller สำหรับรับ Request สำหรับ Action unRePost

const unRePost = async (req: Request, res: Response) => {
  const user = req.user as user;
  const postId = req.params.postId as string;

  try {
    await postService.unRePost(user.userId, postId);
    OK(res, "OK");
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

const postController = {
  createPost,
  updatePost,
  getCurrentUserPost,
  getPost,
  lovePost,
  unLovePost,
  rePost,
  unRePost,
};

export default postController;
