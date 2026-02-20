const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

/*
// __dirname = C:\Users\91620\Desktop\NodeJS_Multer\routes
// uploadFolderPath = C:\Users\91620\Desktop\NodeJS_Multer\uploads
// path.join() safely combines folder paths.
const uploadFolderPath = path.join(__dirname, "../uploads");
// console.log(uploadFolderPath);

// Create uploads folder if not exists
if (!fs.existsSync(uploadFolderPath)) {
  fs.mkdirSync(uploadFolderPath, { recursive: true });
}

// Set up multer to store files in /uploads folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolderPath);
  },
  filename: (req, file, cb) => {
    const suffix = Date.now();
    cb(null, suffix + "-" + file.originalname);
  },
});
*/

// Configure multer to store files in memory as Buffer
const storage = multer.memoryStorage();

const upload = multer({ storage });

// Route to create a new student
router.post("/create", upload.single("photo"), async (req, res) => {
  try {
    const { name, age, email, phone, address } = req.body;

    /*
    // Instead of saving full system path like: C:\Users\91620\Desktop\NodeJS_Multer\uploads\image.jpg
    // const photoPath = req.file ? req.file.path : null; // Get the file path if uploaded

    // You should save only: uploads/image.jpg
    const photoPath = req.file ? `uploads/${req.file.filename}` : null; // Get the file path if uploaded
    */

    const photoBase64 = req.file ? req.file.buffer.toString("base64") : null;

    // Create student record with Base46-encoded image
    const newStudent = new Student({
      name,
      age,
      email,
      phone,
      address,
      // photo: photoPath,
      photo: photoBase64,
    });
    const student = await newStudent.save();
    res.status(201).json({ message: "Student created successfully", student });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Error occurred to creating student record" });
  }
});

module.exports = router;
