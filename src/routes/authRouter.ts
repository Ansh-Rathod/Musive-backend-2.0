import asyncHandler from "../methods/async-function";
import express, { NextFunction, Request, Response } from "express";
import loginHandler from "../controllers/auth/login";
import signUpHandler from "../controllers/auth/signup";
const router = express.Router();

router.post("/register", signUpHandler);
router
  .route("/login")

  .post(loginHandler);

export default router;
