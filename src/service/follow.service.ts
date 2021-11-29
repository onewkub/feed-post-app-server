import prisma from "../utils/prisma";

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
