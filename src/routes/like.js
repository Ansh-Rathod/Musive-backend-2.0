import express from "express";
import { getLikedTracksId, Like, unLike } from "../controllers/liked/liked.js";
import verifyToken from "../middlewares/auth.js";

const router = express.Router();

router.use(verifyToken);

router.get("/liked", getLikedTracksId);
router.post("/like/:track_id", Like);
router.post("/unlike/:track_id", unLike);

export default router;
