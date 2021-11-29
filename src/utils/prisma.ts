import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

prisma.user.findMany({
  select: {
    password: false,
  },
});

export default prisma;
