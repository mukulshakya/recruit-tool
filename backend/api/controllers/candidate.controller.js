// Create candidate
exports.createCandidate = (db) => async (req, res, next) => {
  try {
    const exists = await db.Candidate.findOne({
      where: { email: req.body.email },
    });
    if (exists)
      return res.status(400).json({ message: "email already exists" });

    const candidate = await db.Candidate.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      skills: req.body.skills,
      expectedSalary: req.body.expectedSalary,
      score: computeScore(req.body.nodeExperience, req.body.reactExperience),
    });
    return res.status(201).json(candidate);
  } catch (err) {
    next(err);
  }
};

// Get all candidates
exports.getAllCandidates = (db) => async (req, res, next) => {
  try {
    const candidates = await db.Candidate.findAll({
      order: [["updatedAt", "DESC"]],
    });
    return res.status(200).json(candidates);
  } catch (err) {
    next(err);
  }
};

// Update candidate status
exports.updateCandidateStatus = (db) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const candidate = await db.Candidate.findByPk(id);
    if (!candidate) {
      return res.status(404).json({ message: "candidate not found" });
    }
    candidate.status = status;
    await candidate.save();
    return res.status(200).json(candidate);
  } catch (err) {
    next(err);
  }
};

const computeScore = (nodeExperience, reactExperience) => {
  let nodeScore = 1;
  let reactScore = 1;
  if (nodeExperience > 1) {
    nodeScore = 2;
  }
  if (nodeExperience > 2) {
    nodeScore = 3;
  }
  if (reactExperience > 1) {
    reactScore = 2;
  }
  if (reactExperience > 2) {
    reactScore = 3;
  }
  return nodeScore + reactScore;
};
