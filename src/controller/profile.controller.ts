import { user } from ".prisma/client";
import { Request, Response } from "express";
import ProfileForm from "../models/profileForm";
import profileService from "../service/profile.service";
import { INTERNAL_ERROR, OK } from "../utils/reponseType";

// controller สำหรับรับ Request เรียก Profile User คนปัจจุบัน
const getCurrentUserProfile = async (req: Request, res: Response) => {

};
// controller สำหรับรับ Request เรียก Profile User ตาม userId
const getProfile = async (req: Request, res: Response) => {

};

// controller สำหรับรับ Request สร้าง และ update profile
const createOrUpdateProfile = async (req: Request, res: Response) => {

};

const profileController = {
  createOrUpdateProfile,
  getCurrentUserProfile,
  getProfile,
};

export default profileController;
