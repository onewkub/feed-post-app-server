-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_post" (
    "postId" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "createdUserId" TEXT NOT NULL,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteOn" DATETIME,
    CONSTRAINT "post_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_post" ("content", "createdUserId", "postId") SELECT "content", "createdUserId", "postId" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
