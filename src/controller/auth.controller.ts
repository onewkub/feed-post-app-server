import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";

import RegisterForm from "../models/registerForm";
import authService from "../service/auth.service";
import { isNil } from "lodash";
import passport from "../utils/passport";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";

const login = async (req: Request, res: Response) => {
  passport.authenticate("local", (error, user) => {
    if (!isNil(user)) {
      return OK(res, user);
    } else {
      return BAD_REQUEST(res, error.message);
    }
  })(req, res);
};

const register = async (req: Request, res: Response) => {
  try {
    const registerForm = req.body as RegisterForm;
    const result = await authService.register(registerForm);
    return res.status(200).json({ status: 200, message: result.message });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return BAD_REQUEST(res, "Your email or username already used.");
      } else {
        return BAD_REQUEST(res, "Prisma Error");
      }
    } else {
      return INTERNAL_ERROR(res);
    }
  }
};

const verifyToken = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};

const authController = {
  register,
  login,
  verifyToken,
};

export default authController;
