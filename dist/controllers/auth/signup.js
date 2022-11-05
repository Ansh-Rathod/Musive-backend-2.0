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
const signUpHandler = (0, async_function_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get data from supabase Users table
    const { rows } = yield db_1.default.query(`select username from public."Users" where username=$1;`, [req.body.username]);
    // check if user already exists in user table
    if (rows.length === 0) {
        // create encrypted password
        const hashpass = yield bcrypt_1.default.hash(req.body.password, 10);
        // insert into supabase users table
        yield db_1.default.query(`insert into public."Users" (username, passhash) values($1, $2);`, [req.body.username, hashpass]);
        // genrate new twt token
        const token = (0, genrateJwt_1.genrateJwt)(req.body.username);
        // send response
        res.status(200).send({
            message: "user created",
            username: req.body.username,
            success: true,
            token: token,
        });
    }
    else {
        res.status(400).send({ message: "Username is taken!", success: false });
    }
}));
exports.default = signUpHandler;
