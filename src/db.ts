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
