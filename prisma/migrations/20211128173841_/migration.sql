-- CreateTable
CREATE TABLE "user" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "userProfile" (
    "userProfileId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "history" TEXT,
    "website" TEXT,
    "profileImage" TEXT,
    "bannerImage" TEXT,
    CONSTRAINT "userProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "userFollow" (
    "userFollowId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    CONSTRAINT "userFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "post" (
    "postId" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT NOT NULL,
    "createdUserId" TEXT NOT NULL,
    CONSTRAINT "post_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comment" (
    "commentId" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdUserId" TEXT NOT NULL,
    CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comment_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "userProfile_userId_key" ON "userProfile"("userId");
