const express = require("express");

module.exports = (db) => {
  const router = new express.Router();
  router.use("/candidates", require("./routes/candidate.route")(db));
  return router;
};
