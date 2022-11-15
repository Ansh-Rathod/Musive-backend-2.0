import express from "express";
import {
  getRandomSongs,
  getTracksOfArtist,
  getTracksOfTag,
} from "../controllers/songs/getRandomSongs.js";

const router = express.Router();

router.get("/random/:num", getRandomSongs);
router.get("/artist/:id", getTracksOfArtist);
router.get("/tag/:name", getTracksOfTag);
export default router;
