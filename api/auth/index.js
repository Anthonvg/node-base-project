"use strict";

const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const secretToken = process.env.TOKEN_SECRET_JWT;
  const secretUser = process.env.SECRET_USER;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  try {
    var decoded = jwt.verify(token, secretToken);
    if (decoded.authuser !== secretUser) {
      throw new "unauthorized"();
    }
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};

const generateAccessToken = (auth) => {
  const secretUser = process.env.SECRET_USER;
  const secretToken = process.env.TOKEN_SECRET_JWT;

  if (auth.authuser !== secretUser) {
    throw new Error("unauthorized");
  }

  return jwt.sign({ authuser: auth.authuser }, secretToken);
};

module.exports = {
  authenticateToken,
  generateAccessToken,
};
