import asyncHandler from "../../methods/async-function.js";
import bcrypt from "bcrypt";
import { genrateJwt } from "../../methods/genrateJwt.js";
import pool from "../../db.js";

const signUpHandler = asyncHandler(async (req, res, next) => {
  // get data from supabase Users table
  const { rows } = await pool.query(
    `select username from public."Users" where username=$1;`,
    [req.body.username]
  );
  // check if user already exists in user table
  if (rows.length === 0) {
    // create encrypted password
    const hashpass = await bcrypt.hash(req.body.password, 10);

    // insert into supabase users table
    await pool.query(
      `insert into public."Users" (username, passhash) values($1, $2);`,
      [req.body.username, hashpass]
    );

    // genrate new twt token
    const token = genrateJwt(req.body.username);

    // send response
    res.status(200).send({
      message: "user created",
      username: req.body.username,
      success: true,
      token: token,
    });
  } else {
    res.status(400).send({ message: "Username is taken!", success: false });
  }
});

export default signUpHandler;
