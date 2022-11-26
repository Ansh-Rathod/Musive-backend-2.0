import pool from "../../db.js";
import asyncHandler from "../../methods/async-function.js";

export const getArtistById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { rows } = await pool.query(
    `select id,username,display_name,avatar
       from public."Artists" where id=$1;`,
    [id]
  );
  res.status(200).send({
    success: true,
    data: rows,
  });
});
export const getRandomArtists = asyncHandler(async (req, res, next) => {
  const { num } = req.params;
  if (parseInt(num) > 50) {
    return res.status(400).send({
      success: true,
      message: "You can only get 50 or less than 50 artists with one request.",
    });
  }

  const { rows } = await pool.query(
    `select id,username,display_name,avatar
       from public."Artists" order by random() limit $1;`,
    [num]
  );

  res.status(200).send({
    success: true,
    data: rows,
  });
});

export const getArtistsOfTag = asyncHandler(async (req, res, next) => {
  const { name } = req.params;

  const { rows } = await pool.query(
    `select  DISTINCT display_name, avatar, public."Artists".id as id from 
      public."Tracks" left join public."Artists" on 
      public."Tracks".user_id = public."Artists".id  
      where '${name}'=any(tags) limit 20;`
  );
  res.status(200).send({
    success: true,
    data: rows,
  });
});
