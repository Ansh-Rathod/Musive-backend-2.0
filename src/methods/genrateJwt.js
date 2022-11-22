import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../../../.env" });

export const genrateJwt = (username) => {
  const token = jwt.sign(
    {
      username: username,
    },
    process.env.TOKENKEY,
    {
      expiresIn: "30d",
    }
  );
  return token;
};
