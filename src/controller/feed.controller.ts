import { user } from ".prisma/client";
import { Request, Response } from "express";
import feedService from "../service/feed.service";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";
// controller สำหรับ รับ Request การขอ Feed
const getNewsFeed = async (req: Request, res: Response) => {

};

const feedController = {
  getNewsFeed,
};

export default feedController;
