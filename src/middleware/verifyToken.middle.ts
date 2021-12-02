import { NextFunction, Request, Response } from "express";
import passport from "../utils/passport";
import { UNAUTHORIZE } from "../utils/reponseType";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {

};

export default verifyToken;
