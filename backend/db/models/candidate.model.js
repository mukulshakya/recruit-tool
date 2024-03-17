const { statuses } = require("../../constants");

module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define("candidate", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...statuses),
      allowNull: true,
    },
    expectedSalary: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    score: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  });

  return Candidate;
};
