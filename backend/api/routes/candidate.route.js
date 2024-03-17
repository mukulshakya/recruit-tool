const express = require("express");
const controller = require("../controllers/candidate.controller");
const { validate, checkValidationErrors } = require("../middlewares/validate");

module.exports = (db) => {
  const router = new express.Router();
  router
    .route("/")
    .post(
      validate("createCandidate"),
      checkValidationErrors,
      controller.createCandidate(db)
    )
    .get(controller.getAllCandidates(db));
  router
    .route("/:id/status")
    .put(
      validate("updateCandidateStatus"),
      checkValidationErrors,
      controller.updateCandidateStatus(db)
    );

  return router;
};
