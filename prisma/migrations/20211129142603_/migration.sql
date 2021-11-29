-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profileCreated" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_user" ("createdOn", "email", "password", "userId", "username") SELECT "createdOn", "email", "password", "userId", "username" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
