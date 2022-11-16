import express from "express";
import verifyToken from "../middlewares/auth.js";
import {
  createNewCollection,
  getCollectionsList,
  deleteCollection,
} from "../controllers/collection/collection.js";
const router = express.Router();

router.use(verifyToken);

router.get("/mylists", getCollectionsList);
router.post("/new", createNewCollection);
router.delete("/:id", deleteCollection);

export default router;
