"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genrateJwt = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config({ path: "../../../.env" });
const genrateJwt = (username) => {
    console.log(process.env.TOKENKEY);
    const token = jsonwebtoken_1.default.sign({
        username: username,
    }, process.env.TOKENKEY, {
        expiresIn: "24h",
    });
    return token;
};
exports.genrateJwt = genrateJwt;
