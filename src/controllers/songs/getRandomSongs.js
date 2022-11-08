import asyncHandler from "../../methods/async-function.js";
import pool from "../../db.js";
export const getRandomSongs = asyncHandler(async (req, res, next) => {
  const { num } = req.params;
  const { rows } = await pool.query(
    `select public."Tracks".id,duration,track_name,src,cover_image,
       display_name as artist_name,public."Artists".id as artist_id from 
       public."Tracks" left join public."Artists" on 
       public."Tracks".user_id = public."Artists".id  
       order by random() limit $1`,
    [num]
  );
  res.status(200).send({ success: false, data: rows });
});
