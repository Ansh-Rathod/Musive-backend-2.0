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
exports.getRandomArtists = exports.getArtistById = void 0;
const db_1 = __importDefault(require("../../db"));
const async_function_1 = __importDefault(require("../../methods/async-function"));
exports.getArtistById = (0, async_function_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { rows } = yield db_1.default.query(`select id,username,display_name,avatar,
       (select count(*) from public."Tracks" 
       where public."Tracks".user_id=public."Artists".id) as songs_count
       from public."Artists" where id=$1;`, [id]);
    res.status(200).send({
        success: true,
        data: rows,
    });
}));
exports.getRandomArtists = (0, async_function_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { num } = req.params;
    if (parseInt(num) > 50) {
        return res.status(400).send({
            success: true,
            message: "You can only get 50 or less than 50 artists with one request.",
        });
    }
    const { rows } = yield db_1.default.query(`select id,username,display_name,avatar,
       (select count(*) from public."Tracks" 
       where public."Tracks".user_id=public."Artists".id) as songs_count
       from public."Artists" order by random() limit $1 ;`, [num]);
    res.status(200).send({
        success: true,
        data: rows,
    });
}));
