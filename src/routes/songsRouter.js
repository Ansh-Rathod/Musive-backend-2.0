import express from "express";
import { getRandomSongs } from "../controllers/songs/getRandomSongs.js";

const router = express.Router();

router.get("/random/:num", getRandomSongs);
export default router;
