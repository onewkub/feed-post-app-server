import { user } from ".prisma/client";
import { Request, Response } from "express";
import PostForm from "../models/postForm";
import postService from "../service/post.service";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";


// controller สำหรับรับ Reqeust เรียก Post ของ User คนปัจจุบันทั้งหมด
const getCurrentUserPost = async (req: Request, res: Response) => {

};

// controller สำหรับรับ Request เรียก Post จาก postId
const getPost = async (req: Request, res: Response) => {

};

// controller สำหรับรับ Request เพื่อ สร้าง Post
const createPost = async (req: Request, res: Response) => {

};

// controller สำหรับรับ Request เพื่อ Update Post

const updatePost = async (req: Request, res: Response) => {

};


// controller สำหรับรับ Request สำหรับ Action love

const lovePost = async (req: Request, res: Response) => {

};


// controller สำหรับรับ Request สำหรับ Action unloved

const unLovePost = async (req: Request, res: Response) => {

};


// controller สำหรับรับ Request สำหรับ Action rePost

const rePost = async (req: Request, res: Response) => {

};

// controller สำหรับรับ Request สำหรับ Action unRePost

const unRePost = async (req: Request, res: Response) => {

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
