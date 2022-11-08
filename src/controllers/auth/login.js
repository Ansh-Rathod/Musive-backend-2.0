// imports
import asyncHandler from "../../methods/async-function.js";
import bcrypt from "bcrypt";
import { genrateJwt } from "../../methods/genrateJwt.js";
import pool from "../../db.js";

const loginHandler = asyncHandler(async (req, res, next) => {
  // get data from the supbase to validate if user exists
  const { username, password } = req.body;
  if (!username || !password) {
    return res.send({
      success: false,
      message: "Please add required feilds",
    });
  }
  const { rows } = await pool.query(
    `select username, passhash from public."Users" where username=$1`,
    [username]
  );
  if (rows.length !== 0) {
    // check password is courret or not
    const isSamePass = await bcrypt.compare(
      req.body.password,
      rows[0].passhash
    );

    if (isSamePass) {
      // genrate new jwt token
      const token = genrateJwt(req.body.username);
      // send response
      res.status(200).json({
        success: true,
        username: req.body.username,
        token: token,
      });
      //
    } else {
      // send password is wronf response
      res.status(401).json({
        success: false,
        message: "Wrong username or password!",
      });
    }
  } else {
    res.status(401).json({ success: false, message: "User doesn't exists!" });
  }
});

export default loginHandler;
