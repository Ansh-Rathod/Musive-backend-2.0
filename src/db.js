import pg from "pg";

const Pool = pg.Pool;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:cuXgA7afTRqLxsa7@db.rmdijudagjncbpuymmdh.supabase.co:5432/postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
// postgres://musive_user:7v9v98Blf732CQMmvZ4NN6XBEbCBRxix@dpg-cdj34a4gqg433fdh5sdg-a.oregon-postgres.render.com/musive
