import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import "dotenv/config";
import authRoute from "./routes/authRouter.js";
import songsRoute from "./routes/songsRouter.js";
import likedRoute from "./routes/like.js";
import { corsConfig } from "./middlewares/session.js";
import errorHandler from "./middlewares/error-handler.js";
import artistsRoute from "./routes/artists.js";

import collectionsRoute from "./routes/collection.js";
import helmet from "helmet";
import cors from "cors";

dotenv.config({ path: "../.env" });
const app = express();

const httpServer = createServer(app);
const PORT = process.env.PORT || 4444;

app.use(helmet());
app.use(cors());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// initialize routes
app.get("/", (req, res, next) => res.json("welcome to the api"));

app.use("/api/auth", authRoute);
app.use("/api/artists", artistsRoute);
app.use("/api/songs", songsRoute);
app.use("/api", likedRoute);

app.use("/api/collections", collectionsRoute);

app.use(errorHandler);

httpServer.listen(PORT);
