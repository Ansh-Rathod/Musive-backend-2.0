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
  res.status(200).send({ success: true, data: rows });
});
export const getTracksOfArtist = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { page } = req.query;
  const { rows } = await pool.query(
    `select public."Tracks".id,duration,track_name,src,cover_image,
       display_name as artist_name,public."Artists".id as artist_id from 
       public."Tracks" left join public."Artists" on 
       public."Tracks".user_id = public."Artists".id
       where public."Tracks".user_id=$2  
       offset $1 limit 20;`,
    [(page ?? 0) * 20, id]
  );
  res.status(200).send({ success: true, data: rows });
});
export const getTracksOfTag = asyncHandler(async (req, res, next) => {
  const { name } = req.params;
  const { page } = req.query;
  const { rows } = await pool.query(
    `select public."Tracks".id,duration,track_name,src,cover_image,
       display_name as artist_name,public."Artists".id as artist_id from 
       public."Tracks" left join public."Artists" on 
       public."Tracks".user_id = public."Artists".id
       where '${name}' =Any(public."Tracks".tags)
       offset $1 limit 20;`,
    [(page ?? 0) * 20]
  );
  res.status(200).send({ success: true, data: rows });
});
