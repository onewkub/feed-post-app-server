import { Router } from "express";
import authController from "../controller/auth.controller";
import basicController from "../controller/basic.controller";
import validateQueryParams from "../middleware/example.middle";

const router = Router();

router.get("/hello-world", basicController.helloWorld);

router.get(
  "/basic-middleware",
  validateQueryParams,
  basicController.basicMiddleWare
);

router.post("/register", authController.register);
router.post("/login", authController.login);

router.use("/*", (_, res) => {
  res.status(404).json("not found");
});

export default router;
