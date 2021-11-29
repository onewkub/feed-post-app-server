-- CreateTable
CREATE TABLE "rePost" (
    "rePostId" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "rePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "rePost_postId_userId_key" ON "rePost"("postId", "userId");
