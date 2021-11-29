import { user } from ".prisma/client";
import { Request, Response } from "express";
import ProfileForm from "../models/profileForm";
import profileService from "../service/profile.service";
import { INTERNAL_ERROR, OK } from "../utils/reponseType";

const getCurrentUserProfile = async (req: Request, res: Response) => {
  try {
    const user = req.user as user;
    const result = await profileService.getProfile(user.userId);
    return OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;
    const result = await profileService.getProfile(userId);
    OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const user = req.user as user;
    const newProfile = req.body as ProfileForm;
    const result = await profileService.createOrUpdateProfile(
      user.userId,
      newProfile
    );
    OK(res, result);
  } catch (error) {
    INTERNAL_ERROR(res);
  }
};

const profileController = {
  createOrUpdateProfile,
  getCurrentUserProfile,
  getProfile,
};

export default profileController;
