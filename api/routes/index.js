"use strict";
const controllers = require("../controllers");
const auth = require("../auth");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Good job ...");
  });

  /*******  AUTHORIZE ********/
  app.post("/api/auth", (req, res) => {
    const authUser = req.body.authuser;
    if (authUser) {
      const token = auth.generateAccessToken({ authuser: authUser });
      res.json({ token: token });
    } else {
      res.json({ message: "Error, add all parameters." });
    }
  });

  app.post("/api/getData/", (req, res) => {
    controllers.worker(req, res);
  });

  /*******  DEFAULT 404 RESPONSE (ALWAYS DOWN) ********/
  app.use((req, res) => {
    res.status(404).send({
      message: `This url is not found`,
    });
  });
};
