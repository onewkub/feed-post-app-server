/*
  Warnings:

  - Added the required column `name` to the `userProfile` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userProfile" (
    "userProfileId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT,
    "website" TEXT,
    "profileImage" TEXT,
    "bannerImage" TEXT,
    CONSTRAINT "userProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userProfile" ("bannerImage", "history", "profileImage", "userId", "userProfileId", "website") SELECT "bannerImage", "history", "profileImage", "userId", "userProfileId", "website" FROM "userProfile";
DROP TABLE "userProfile";
ALTER TABLE "new_userProfile" RENAME TO "userProfile";
CREATE UNIQUE INDEX "userProfile_userId_key" ON "userProfile"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
