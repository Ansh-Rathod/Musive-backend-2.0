import express from "express";
import verifyToken from "../middlewares/auth.js";
import {
  createNewCollection,
  getCollectionsList,
  deleteCollection,
  addToCollection,
  getTrackFromCollection,
  getCollectionInfo,
  renameCollection,
  deleteTrackFromCollection,
} from "../controllers/collection/collection.js";
const router = express.Router();

router.use(verifyToken);

router.get("/mylists", getCollectionsList);
router.get("/tracks/:id", getTrackFromCollection);
router.get("/info/:id", getCollectionInfo);
router.post("/new", createNewCollection);
router.put("/add/track", addToCollection);
router.delete("/:id", deleteCollection);
router.put("/rename/:id", renameCollection);
router.put("/remove/track", deleteTrackFromCollection);

export default router;
