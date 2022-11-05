"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_function_1 = __importDefault(require("../../methods/async-function"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const genrateJwt_1 = require("../../methods/genrateJwt");
const db_1 = __importDefault(require("../../db"));
const loginHandler = (0, async_function_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get data from the supbase to validate if user exists
    const { username, password } = req.body;
    if (!username || !password) {
        return res.send({
            success: false,
            message: "Please add required feilds",
        });
    }
    const { rows } = yield db_1.default.query(`select username, passhash from public."Users" where username=$1`, [username]);
    if (rows.length !== 0) {
        // check password is courret or not
        const isSamePass = yield bcrypt_1.default.compare(req.body.password, rows[0].passhash);
        if (isSamePass) {
            // genrate new jwt token
            const token = (0, genrateJwt_1.genrateJwt)(req.body.username);
            // send response
            res.status(200).json({
                success: true,
                username: req.body.username,
                token: token,
            });
            //
        }
        else {
            // send password is wronf response
            res.status(401).json({
                success: false,
                message: "Wrong username or password!",
            });
        }
    }
    else {
        res.status(401).json({ success: false, message: "User doesn't exists!" });
    }
}));
exports.default = loginHandler;
