import { Router } from "express";
import authController from "../controller/auth.controller";
import commentController from "../controller/comment.controller";
import feedController from "../controller/feed.controller";
import followController from "../controller/follow.controller";
import postController from "../controller/post.controller";
import profileController from "../controller/profile.controller";
import verifyToken from "../middleware/verifyToken.middle";

const router = Router();

//* Auth
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/verify-token", verifyToken, authController.verifyToken);


//* Profile
router.get(
  "/profiles/me",
  verifyToken,
  profileController.getCurrentUserProfile
);

router.post(
  "/profiles/me",
  verifyToken,
  profileController.createOrUpdateProfile
);

router.get("/profiles/:userId", verifyToken, profileController.getProfile);

//* Posts

router.get("/posts/me", verifyToken, postController.getCurrentUserPost);

router.get("/posts/:postId", verifyToken, postController.getPost);

router.post("/posts", verifyToken, postController.createPost);

router.put("/posts/:postId", verifyToken, postController.updatePost);

router.post("/posts/:postId/love", verifyToken, postController.lovePost);

router.delete("/posts/:postId/un-love", verifyToken, postController.unLovePost);

router.post("/posts/:postId/re-post", verifyToken, postController.rePost);

router.delete("/posts/:postId/un-re-post", verifyToken, postController.unRePost);

//* Follow and Un Follow
router.get("/follow/:userId", verifyToken, followController.followUser);

router.get("/un-follow/:userId", verifyToken, followController.unFollowUser);

//* Feed news
router.get("/feeds", verifyToken, feedController.getNewsFeed);

//*  Comment Post
router.post("/comments/:postId", verifyToken, commentController.createComment);

router.put(
  "/comments/:commentId",
  verifyToken,
  commentController.updateComment
);

router.use("/*", (_, res) => {
  res.status(404).json("not found");
});

export default router;
