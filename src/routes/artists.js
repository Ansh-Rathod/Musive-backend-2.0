import express from "express";
import {
  getArtistById,
  getRandomArtists,
  getArtistsOfTag,
} from "../controllers/artists/getArtistsController.js";

const router = express.Router();

router.get("/:id", getArtistById);
router.get("/random/:num", getRandomArtists);
router.get("/tag/:name", getArtistsOfTag);

export default router;
