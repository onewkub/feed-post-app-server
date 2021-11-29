/*
  Warnings:

  - Added the required column `userId` to the `postImage` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_postImage" (
    "imageId" TEXT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "order" INTEGER,
    CONSTRAINT "postImage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_postImage" ("data", "imageId", "order", "postId") SELECT "data", "imageId", "order", "postId" FROM "postImage";
DROP TABLE "postImage";
ALTER TABLE "new_postImage" RENAME TO "postImage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
