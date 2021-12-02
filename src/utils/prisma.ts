import { PrismaClient } from ".prisma/client";

// สร้าง Prisma client สำหรับ Query ผ่าน ORM
const prisma = new PrismaClient();


export default prisma;
