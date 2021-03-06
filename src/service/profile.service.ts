import ProfileForm from "../models/profileForm";
import prisma from "../utils/prisma";

// Service เพื่อ Query ข้อมูล Profile ของผู้ใช้
const getProfile = async (userId: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { userId },
      include: {
        profile: true,
        _count: { select: { following: true, follower: true } },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

// Service สร้าง Profile ของผู้ใช้
const createOrUpdateProfile = async (
  userId: string,
  profileForm: ProfileForm
) => {
  try {
    const result = await prisma.userProfile.upsert({
      where: {
        userId: userId,
      },
      update: {
        ...profileForm,
      },
      create: {
        ...profileForm,
        userId,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const profileService = {
  createOrUpdateProfile,
  getProfile,
};

export default profileService;
