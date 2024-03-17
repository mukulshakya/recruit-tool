const { checkSchema, validationResult } = require("express-validator");
const { statuses } = require("../../constants");

const schemas = {
  createCandidate: {
    phone: { isMobilePhone: { options: ["any"] } },
    email: { exists: true, isEmail: true, isLowercase: true },
    name: { exists: true, isLength: { options: { min: 3 } } },
    skills: { exists: true, isLength: { options: { min: 2 } } },
    status: { exists: false },
    expectedSalary: { exists: true, isInt: { options: { min: 1 } } },
    nodeExperience: { exists: true, isInt: { options: { min: 1, max: 3 } } },
    reactExperience: { exists: true, isInt: { options: { min: 1, max: 3 } } },
  },
  updateCandidateStatus: {
    status: { exists: true, isIn: { options: [statuses] } },
  },
};

exports.validate = (name) => checkSchema(schemas[name]);

exports.checkValidationErrors = (req, res, next) => {
  const result = validationResult(req);
  const errors = result.array();
  if (!errors.length) return next();

  const errorFormatted = {};
  errors.forEach((error) => {
    errorFormatted[error.path] = error.msg;
  });
  return res.status(400).json(errorFormatted);
};
