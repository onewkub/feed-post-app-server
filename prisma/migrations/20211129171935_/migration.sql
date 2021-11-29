/*
  Warnings:

  - You are about to drop the `LovePost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "LovePost";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "lovePost" (
    "lovePostId" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "lovePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "lovePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "lovePost_postId_userId_key" ON "lovePost"("postId", "userId");
