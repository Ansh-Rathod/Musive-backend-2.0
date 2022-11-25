import pg from "pg";
import dotenv from "dotenv";
import "dotenv/config";
dotenv.config({ path: "../.env" });

const Pool = pg.Pool;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
