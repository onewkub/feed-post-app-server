-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userFollow" (
    "userFollowId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    CONSTRAINT "userFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userFollow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userFollow" ("followingId", "userFollowId", "userId") SELECT "followingId", "userFollowId", "userId" FROM "userFollow";
DROP TABLE "userFollow";
ALTER TABLE "new_userFollow" RENAME TO "userFollow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
