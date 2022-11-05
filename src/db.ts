// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
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
