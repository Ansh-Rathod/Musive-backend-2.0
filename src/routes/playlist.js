import express from "express";
import verifyToken from "../middlewares/auth.js";

const router = express.Router();

router.use(verifyToken);

// router.get("/mylists", getLikedTracksId);
// router.post("/", Like);

export default router;
