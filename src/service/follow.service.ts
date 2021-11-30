import prisma from "../utils/prisma";

// Service สร้างเพื่อ Action การกด Follow ของผุ้ใช้

const followUser = async (userId: string, target: string) => {
  try {
    const result = await prisma.userFollow.create({
      data: { userId, followingId: target },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

// Service สร้างเพื่อ Action การกด UnFollow ของผุ้ใช้

const unFollowUser = async (userId: string, target: string) => {
  try {
    await prisma.userFollow.delete({
      where: { userId_followingId: { userId, followingId: target } },
    });
  } catch (error) {
    throw error;
  }
};

const followingService = { followUser, unFollowUser };

export default followingService;
