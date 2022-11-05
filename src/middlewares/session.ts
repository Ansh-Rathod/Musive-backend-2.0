import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

var whitelist = [
  "https://musive.vercel.app",
  "http://localhost:3000",
  "http://192.168.43.163:3000",
];
var corsConfig = {
  origin: "*",
  credentials: true,
};

export { corsConfig };
