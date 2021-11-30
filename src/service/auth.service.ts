import RegisterForm from "../models/registerForm";
import prisma from "../utils/prisma";
import bcrypt from "bcrypt";

// Service สำหรับสร้าง Account ของผู้ใช้
const register = async (registerForm: RegisterForm) => {
  try {
    const SALT = 10;
    /* 
      Hash password ด้วยอย่าเก็บเป็น PlainText เพราะหากข้อมูล User 
      หลุดออกไปก็ยังปลอดภัยที่จะไม่สามารถรู้รหัสได้ว่าคืออะไร
    */
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
