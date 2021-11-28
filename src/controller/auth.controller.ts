import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";

import RegisterForm from "../models/registerForm";
import authService from "../service/auth.service";
import { isNil } from "lodash";
import passport from "../utils/passport";

const login = async (req: Request, res: Response) => {
  console.log(req.user);
  passport.authenticate("local", (error, user) => {
    if (!isNil(user)) {
      return res.status(200).json(user);
    } else {
      return res.status(400).json({ status: 400, message: error.message });
    }
  })(req, res);
};

const register = async (req: Request, res: Response) => {
  try {
    const registerForm = req.body as RegisterForm;
    const result = await authService.register(registerForm);
    return res.status(200).json({ status: 200, message: result.message });
  } catch (e) {
    const error = e as PrismaClientKnownRequestError;
    if (error.code === "P2002") {
      return res
        .status(400)
        .json({ status: 400, message: "Your email or username already used." });
    }
    return res
      .status(500)
      .json({ status: 500, message: "Internal Error Something went wrong!!" });
  }
};

const authController = {
  register,
  login,
};

export default authController;
