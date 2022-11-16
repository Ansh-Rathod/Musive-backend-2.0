import pool from "../../db.js";
import asyncHandler from "../../methods/async-function.js";

//
export const createNewCollection = asyncHandler(async (req, res, next) => {
  //
  if (!req.body.name) {
    return res
      .status(403)
      .send({ success: false, message: "please add body parameter" });
  }

  const { rows } = await pool.query(
    `insert into "Collections" (name,username) values ($1,$2) returning *,(select cover_image from "Tracks" 
      where id=(select track_id from "CollectionItems" where collection_id = "Collections".id limit 1)) as cover_image;`,
    [req.body.name, req.username]
  );
  if (req.body.track_id) {
    await pool.query(
      `insert into "CollectionItems" (collection_id,track_id) values ($1,$2);`,
      [rows[0].id, req.body.track_id]
    );
  }

  res.status(200).send({
    success: true,
    data: rows.map((row) => {
      if (row.cover_image) {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image: row.cover_image.urls.raw,
          color: row.cover_image.color,
        };
      } else {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image: null,
          color: null,
        };
      }
    }),
  });
});

export const getCollectionsList = asyncHandler(async (req, res, next) => {
  const { rows } = await pool.query(
    `select id, name, total_tracks,(select cover_image from "Tracks" 
      where id=(select track_id from "CollectionItems" where collection_id = "Collections".id limit 1)) as cover_image
      from "Collections" where username=$1;`,
    [req.username]
  );

  res.status(200).send({
    success: true,
    data: rows.map((row) => {
      if (row.cover_image) {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image: row.cover_image.urls.raw,
          color: row.cover_image.color,
        };
      } else {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image: null,
          color: null,
        };
      }
    }),
  });
});

export const deleteCollection = asyncHandler(async (req, res, next) => {
  await pool.query(`delete from "Collections" where id=$1;`, [req.params.id]);
  res.status(200).send({ success: true });
});

export const addToCollection = asyncHandler(async (req, res, next) => {
  const { collection_id, track_id } = req.body;
  await pool.query(
    `insert into "CollectionItems" (track_id,collection_id) values ($1,$2);`,
    [track_id, collection_id]
  );
  console.log("done");
  res.status(200).send({ success: true });
});
