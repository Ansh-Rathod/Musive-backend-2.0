import { NextFunction, Request, response, Response } from "express";
import pool from "../../db";
import asyncHandler from "../../methods/async-function";

export const getArtistById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { rows } = await pool.query(
      `select id,username,display_name,avatar,
       (select count(*) from public."Tracks" 
       where public."Tracks".user_id=public."Artists".id) as songs_count
       from public."Artists" where id=$1;`,
      [id]
    );
    res.status(200).send({
      success: true,
      data: rows,
    });
  }
);
export const getRandomArtists = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { num } = req.params;
    if (parseInt(num) > 50) {
      return res.status(400).send({
        success: true,
        message:
          "You can only get 50 or less than 50 artists with one request.",
      });
    }

    const { rows } = await pool.query(
      `select id,username,display_name,avatar,
       (select count(*) from public."Tracks" 
       where public."Tracks".user_id=public."Artists".id) as songs_count
       from public."Artists" order by random() limit $1 ;`,
      [num]
    );
    res.status(200).send({
      success: true,
      data: rows,
    });
  }
);
