/*
  Warnings:

  - A unique constraint covering the columns `[userId,followingId]` on the table `userFollow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userFollow_userId_followingId_key" ON "userFollow"("userId", "followingId");
