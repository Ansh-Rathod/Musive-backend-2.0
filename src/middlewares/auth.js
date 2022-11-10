import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.query.token || req.body.token || req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .send({ error: "A token is reqiured for authentication" });
  }

  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, process.env.TOKENKEY);

    req.username = decoded.username;
  } catch (error) {
    return res.status(403).send({ error: "token error" });
  }

  return next();
};

export default verifyToken;
