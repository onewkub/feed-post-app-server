import { isNil } from "lodash";
import prisma from "../utils/prisma";

const getFeeds = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { userId },
      select: { following: { select: { followingId: true } } },
    });
    if (!isNil(user)) {
      const followingUsers = user.following.map((i) => i.followingId);
      const meAndFollowing = [userId, ...followingUsers];
      console.log(meAndFollowing)
      const result = await prisma.post.findMany({
        where: {
          OR: [
            {
              createdUserId: { in: meAndFollowing },
            },
            {
              lovePost: { some: { userId: { in: followingUsers } } },
            },
            {
              rePost: { some: { userId: { in: followingUsers } } },
            },
          ],
        },
        orderBy: { createdOn: "desc" },
        include: {
          createdUser: {
            select: {
              username: true,
              profile: { select: { name: true, profileImage: true } },
            },
          },
          _count: {
            select: { lovePost: true, rePost: true },
          },
          lovePost: {
            select: {
              userId: true,
              user: {
                select: {
                  username: true,
                  profile: { select: { name: true, profileImage: true } },
                },
              },
            },
            where: { userId: { in: meAndFollowing } },
          },
          rePost: {
            select: {
              userId: true,
              user: {
                select: {
                  username: true,
                  profile: { select: { name: true, profileImage: true } },
                },
              },
            },
            where: { userId: { in: meAndFollowing } },
          },
        },
        distinct: ["postId"],
      });
      return result;
    } else {
      throw new Error("Can't find user with given userId");
    }
  } catch (error) {
    throw error;
  }
};

const feedService = {
  getFeeds,
};

export default feedService;
