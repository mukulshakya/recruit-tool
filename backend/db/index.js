const { Sequelize } = require("sequelize");
const CandidateModel = require("./models/candidate.model");

const sequelize = new Sequelize(process.env.PG_URL);

const Candidate = CandidateModel(sequelize, Sequelize);

module.exports = {
  sequelize,
  Candidate,
};
