import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../../../.env" });

export const genrateJwt = (username: string) => {
  console.log(process.env.TOKENKEY!);
  const token = jwt.sign(
    {
      username: username,
    },
    process.env.TOKENKEY!,
    {
      expiresIn: "24h",
    }
  );
  return token;
};
