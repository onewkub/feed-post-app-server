import { NextFunction, Request, Response } from "express";
import passport from "../utils/passport";
import { UNAUTHORIZE } from "../utils/reponseType";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (_, user) => {
    if (user) {
      req.user = user;
      next();
    } else {
      return UNAUTHORIZE(res, "Your token is already expired");
    }
  })(req, res);
};

export default verifyToken;
