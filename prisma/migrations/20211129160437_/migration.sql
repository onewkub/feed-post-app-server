/*
  Warnings:

  - You are about to drop the column `body` on the `comment` table. All the data in the column will be lost.
  - Added the required column `comment` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comment" (
    "commentId" TEXT NOT NULL PRIMARY KEY,
    "comment" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdUserId" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comment_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comment" ("commentId", "createdOn", "createdUserId", "postId") SELECT "commentId", "createdOn", "createdUserId", "postId" FROM "comment";
DROP TABLE "comment";
ALTER TABLE "new_comment" RENAME TO "comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
