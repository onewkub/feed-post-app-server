import { user } from ".prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import followingService from "../service/follow.service";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";

// controller สำหรับรับ Request การ Follow ของ User

const followUser = async (req: Request, res: Response) => {

};

// controller สำหรับรับ Request การ UnFollow ของ User

const unFollowUser = async (req: Request, res: Response) => {
  const user = req.user as user;
  const target = req.params.userId;
  if (user.userId === target) {
    return BAD_REQUEST(
      res,
      "Are you kidding me do you want to un-follow yourself?"
    );
  }
  try {
    await followingService.followUser(user.userId, target);
    OK(res, "OK");
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      BAD_REQUEST(res, "Prisma Error");
    } else {
      INTERNAL_ERROR(res);
    }
  }
};

const followController = { followUser, unFollowUser };

export default followController;
