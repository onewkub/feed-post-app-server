import { PrismaClient } from ".prisma/client";

// สร้าง Prisma client สำหรับ Query ผ่าน ORM
const prisma = new PrismaClient();

prisma.user.findMany({
  select: {
    password: false,
  },
});

export default prisma;
