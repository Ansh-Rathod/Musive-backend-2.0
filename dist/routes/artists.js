"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getArtistsController_1 = require("../controllers/artists/getArtistsController");
const router = express_1.default.Router();
router.get("/:id", getArtistsController_1.getArtistById);
router.get("/random/:num", getArtistsController_1.getRandomArtists);
exports.default = router;
