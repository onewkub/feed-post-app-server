-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comment" (
    "commentId" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdUserId" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comment_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comment" ("body", "commentId", "createdUserId", "postId") SELECT "body", "commentId", "createdUserId", "postId" FROM "comment";
DROP TABLE "comment";
ALTER TABLE "new_comment" RENAME TO "comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
