import pool from "../../db.js";
import asyncHandler from "../../methods/async-function.js";

export const getLikedTracksId = asyncHandler(async (req, res, next) => {
  const { rows } = await pool.query(
    `select track_id from public."Liked" where username = $1;`,
    [req.username]
  );
  const data = rows.map((row) => row.track_id);
  res.status(200).send({ success: true, data: data });
});

export const getLikedTracks = asyncHandler(async (req, res, next) => {
  const { rows } = await pool.query(
    `select track_id from public."Liked" where username = $1;`,
    [req.username]
  );
  res.status(200).send({ success: true, data: rows });
});

export const Like = asyncHandler(async (req, res, next) => {
  const { track_id } = req.params;
  const { rows } = await pool.query(
    `insert into public."Liked"(track_id,username) values ($1,$2);`,
    [track_id, req.username]
  );
  res.status(200).send({ success: true, data: rows });
});

export const unLike = asyncHandler(async (req, res, next) => {
  const { track_id } = req.params;
  const { rows } = await pool.query(
    `delete from public."Liked" where track_id=$1 and username = $2;`,
    [track_id, req.username]
  );
  res.status(200).send({ success: true, data: rows });
});
