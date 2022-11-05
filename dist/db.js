"use strict";
// import { createClient } from "@supabase/supabase-js";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
const pg_1 = __importDefault(require("pg"));
const Pool = pg_1.default.Pool;
const pool = new Pool({
    connectionString: "postgresql://postgres:cuXgA7afTRqLxsa7@db.rmdijudagjncbpuymmdh.supabase.co:5432/postgres",
    ssl: {
        rejectUnauthorized: false,
    },
});
exports.default = pool;
