const dotenv = require("dotenv");
const express = require("express");
const routes = require("./api/routes");

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();

app.listen(port);
app.use(express.json());

routes(app);

app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() });
});

console.log("Node application running on port " + port);
