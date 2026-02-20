const express = require("express");
const router = express.Router();
const { createStudent } = require("../controllers/studentController");
const multer = require("multer");
const fs = require("fs");

/*
const path = "uploads";
// Create uploads folder if not exists
if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true });
}

// Set up multer to store files in /uploads folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const suffix = Date.now();
    cb(null, suffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });
*/

// Configure multer to store files in memory as Buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to create a new student
router.post("/create", upload.single("photo"), createStudent);

module.exports = router;
