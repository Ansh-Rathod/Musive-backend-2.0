import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
};

export { corsConfig };
