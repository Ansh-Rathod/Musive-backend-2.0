import express from "express";
import loginHandler from "../controllers/auth/login.js";
import signUpHandler from "../controllers/auth/signup.js";
const router = express.Router();

router.post("/register", signUpHandler);
router
  .route("/login")

  .post(loginHandler);

export default router;
