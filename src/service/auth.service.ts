import RegisterForm from "../models/registerForm";
import prisma from "../utils/prisma";
import bcrypt from "bcrypt";

const register = async (registerForm: RegisterForm) => {
  try {
    const SALT = 10;
    const hashPassword = await bcrypt.hash(registerForm.password, SALT);
    await prisma.user.create({
      data: {
        username: registerForm.username,
        password: hashPassword,
        email: registerForm.email,
      },
    });
    return {
      message: "Your registration successful",
    };
  } catch (error) {
    throw error;
  }
};
const authService = {
  register,
};

export default authService;
