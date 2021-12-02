import RegisterForm from "../models/registerForm";
import prisma from "../utils/prisma";
import bcrypt from "bcrypt";

// Service สำหรับสร้าง Account ของผู้ใช้
const register = async (registerForm: RegisterForm) => {

};
const authService = {
  register,
};

export default authService;
