import pg from "pg";
dotenv.config({ path: "../.env" });

const Pool = pg.Pool;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
// postgres://musive_user:7v9v98Blf732CQMmvZ4NN6XBEbCBRxix@dpg-cdj34a4gqg433fdh5sdg-a.oregon-postgres.render.com/musive
