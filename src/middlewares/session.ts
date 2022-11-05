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
// var corsConfig = {
//   origin: function (origin: any, callback: any) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };

export { corsConfig };
