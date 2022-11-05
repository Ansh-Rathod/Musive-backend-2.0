import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const corsConfig = {
  origin: "https://musive.vercel.app",
  credentials: true,
};

export { corsConfig };
