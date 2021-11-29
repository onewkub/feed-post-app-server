/*
  Warnings:

  - You are about to drop the column `body` on the `post` table. All the data in the column will be lost.
  - Added the required column `content` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "postImage" (
    "imageId" TEXT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "order" INTEGER,
    CONSTRAINT "postImage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_post" (
    "postId" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "createdUserId" TEXT NOT NULL,
    CONSTRAINT "post_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_post" ("createdUserId", "postId") SELECT "createdUserId", "postId" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
