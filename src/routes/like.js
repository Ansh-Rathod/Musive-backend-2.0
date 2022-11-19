import express from "express";
import {
  getLikedTracksId,
  Like,
  unLike,
  getLikedTracks,
} from "../controllers/liked/liked.js";
import verifyToken from "../middlewares/auth.js";

const router = express.Router();

router.use(verifyToken);

router.get("/liked", getLikedTracksId);
router.get("/liked/tracks", getLikedTracks);
router.post("/like/:track_id", Like);
router.post("/unlike/:track_id", unLike);

export default router;
