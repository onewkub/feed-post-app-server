import ProfileForm from "../models/profileForm";
import prisma from "../utils/prisma";

// Service เพื่อ Query ข้อมูล Profile ของผู้ใช้
const getProfile = async (userId: string) => {

};

// Service สร้าง Profile ของผู้ใช้
const createOrUpdateProfile = async (
  userId: string,
  profileForm: ProfileForm
) => {

};

const profileService = {
  createOrUpdateProfile,
  getProfile,
};

export default profileService;
