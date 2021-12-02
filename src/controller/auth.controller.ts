import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";

import RegisterForm from "../models/registerForm";
import authService from "../service/auth.service";
import { isNil } from "lodash";
import passport from "../utils/passport";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../utils/reponseType";

// Controller สำหรับ รับ Request Login
const login = async (req: Request, res: Response) => {
};

// Controller สำหรับ รับ Request Register
const register = async (req: Request, res: Response) => {

};

const verifyToken = async (req: Request, res: Response) => {
  
};

const authController = {
  register,
  login,
  verifyToken,
};

export default authController;
