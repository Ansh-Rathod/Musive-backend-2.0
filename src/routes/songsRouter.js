import express from "express";
import {
  getRandomSongs,
  getTracksOfArtist,
} from "../controllers/songs/getRandomSongs.js";

const router = express.Router();

router.get("/random/:num", getRandomSongs);
router.get("/artist/:id", getTracksOfArtist);
export default router;
