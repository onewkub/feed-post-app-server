import { NextFunction, Request, Response } from "express";
import passport from "../utils/passport";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (_, user) => {
    if (user) {
      req.user = user;
      next();
    } else {
      return res
        .status(401)
        .json({ status: 401, message: "Your token is already expired" });
    }
  })(req, res);
};

export default verifyToken;
