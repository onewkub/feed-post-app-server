import { user } from ".prisma/client";
import { Request, Response } from "express";
import commentForm from "../models/commentForm";
import commentService from "../service/comment.service";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";

// controller สำหรับ สร้าง comment
const createComment = async (req: Request, res: Response) => {

};

// controller สำหรับ update comment
const updateComment = async (req: Request, res: Response) => {

};

const commentController = { createComment, updateComment };

export default commentController;
