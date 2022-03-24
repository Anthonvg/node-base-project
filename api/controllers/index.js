"use strict";

const piscina = require("piscina");
const path = require("path");

const workerPath = path.resolve(__dirname, "../workers/ecommerce/index.js");
const piscinaWorker = new piscina({
  filename: workerPath,
  concurrentTasksPerWorker: 2,
  idleTimeout: 100,
});

const worker = async (req, res) => {
  const result = await piscinaWorker.runTask({
    url: "",
  });
  res.send(result);
};

module.exports = {
  worker,
};
