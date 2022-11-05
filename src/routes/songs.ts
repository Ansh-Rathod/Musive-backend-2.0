import express from "express";
import { getRandomSongs } from "../controllers/songs/getRandomSongs";

const router = express.Router();

router.get("/random/:num", getRandomSongs);
export default router;
