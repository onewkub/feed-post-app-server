import { user } from ".prisma/client";
import { Request, Response } from "express";
import feedService from "../service/feed.service";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";
// controller สำหรับ รับ Request การขอ Feed
const getNewsFeed = async (req: Request, res: Response) => {
  const user = req.user as user;
  try {
    const result = await feedService.getFeeds(user.userId);
    OK(res, result);
  } catch (error) {
    if (error instanceof Error) {
      BAD_REQUEST(res, error.message);
    } else {
      INTERNAL_ERROR(res);
    }
  }
};

const feedController = {
  getNewsFeed,
};

export default feedController;
