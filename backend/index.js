require("dotenv").config();

const express = require("express");
const db = require("./db");

const app = express();

// Middlewares
app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./api")(db));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ message: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 8000;
// open db connection
db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error opening db connection:", err);
  });
