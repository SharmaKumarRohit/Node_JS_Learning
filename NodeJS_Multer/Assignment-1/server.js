const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const path = require("path");
const multer = require("multer");

const PORT = process.env.PORT;
app.use(express.json());

// Make the uploads folder public so users can access uploaded images using a URL.
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const studentRoute = require("./routes/studentRoute");

app.use("/student", studentRoute);

// This is error-handling middleware
app.use((err, req, res, next) => {
  // instance of checks, Is this error created by Multer?
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message });
  } else {
    return res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server is listening on port http://localhost:${PORT}`),
);
