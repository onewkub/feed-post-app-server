/*
  Warnings:

  - A unique constraint covering the columns `[postId,userId]` on the table `LovePost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LovePost_postId_userId_key" ON "LovePost"("postId", "userId");
