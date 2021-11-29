-- CreateTable
CREATE TABLE "LovePost" (
    "lovePostId" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "LovePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LovePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
