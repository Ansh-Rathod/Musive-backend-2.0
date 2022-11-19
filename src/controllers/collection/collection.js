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
  var coverImage = null;
  const { rows } = await pool.query(
    `insert into "Collections" (name,username) values ($1,$2) returning *,(select cover_image from "Tracks" 
      where id=(select track_id from "CollectionItems" where collection_id = "Collections".id limit 1)) as cover_image;`,
    [req.body.name, req.username]
  );
  if (req.body.track_id) {
    const cover_image = await pool.query(
      `insert into "CollectionItems" (collection_id,track_id) values ($1,$2) 
      returning (select cover_image->'url' as cover_image from "Tracks" where id=$2);`,
      [rows[0].id, req.body.track_id]
    );
    coverImage = cover_image.rows[0].cover_image;
  }

  res.status(200).send({
    success: true,
    data: rows.map((row) => {
      if (row.cover_image) {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image: row.cover_image.url,
          color: row.cover_image.color,
        };
      } else {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image:
            coverImage ??
            "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",

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
          cover_image: row.cover_image.url,
          color: row.cover_image.color,
        };
      } else {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image:
            "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
          color: "#4b3432",
        };
      }
    }),
  });
});

export const getCollectionInfo = asyncHandler(async (req, res, next) => {
  const { rows } = await pool.query(
    `select id, name, total_tracks,(select cover_image from "Tracks" 
      where id=(select track_id from "CollectionItems" where collection_id = "Collections".id limit 1)) as cover_image
      from "Collections" where id=$1;`,
    [req.params.id]
  );

  res.status(200).send({
    success: true,
    data: rows.map((row) => {
      if (row.cover_image) {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image: row.cover_image.url,
          color: row.cover_image.color,
        };
      } else {
        return {
          id: row.id,
          name: row.name,
          total_tracks: row.total_tracks,
          cover_image:
            "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
          color: "#4b3432",
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
  res.status(200).send({ success: true });
});

export const deleteTrackFromCollection = asyncHandler(
  async (req, res, next) => {
    const { collection_id } = req.body;
    const { track_id } = req.body;

    await pool.query(
      `delete from "CollectionItems" where track_id = $1 and collection_id=$2;`,
      [track_id, collection_id]
    );
    res.status(200).send({ success: true });
  }
);

export const getTrackFromCollection = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { rows } = await pool.query(
    `select public."Tracks".id,duration,track_name,src,cover_image,
       display_name as artist_name,public."Artists".id as artist_id from 
       public."Tracks" left join public."Artists" on 
       public."Tracks".user_id = public."Artists".id
       where public."Tracks".id in (select track_id from public."CollectionItems" where collection_id = $1);`,

    [id]
  );
  res.status(200).send({ success: true, data: rows });
});

export const renameCollection = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.query;
  await pool.query(`update "Collections" set name=$1 where id=$2;`, [name, id]);

  res.status(200).send({ success: true });
});
