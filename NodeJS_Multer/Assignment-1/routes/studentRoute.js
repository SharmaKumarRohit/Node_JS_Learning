const express = require("express");
const router = express.Router();
const { createStudent } = require("../controllers/studentController");
const multer = require("multer");
const fs = require("fs");

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure upload/profile-pics directory exists
    const profilePath = "./uploads/profile-pics";
    if (!fs.existsSync(profilePath)) {
      fs.mkdirSync(profilePath, { recursive: true });
    }
    cb(null, profilePath);
  },
  filename: (req, file, cb) => {
    const suffix = Date.now() + "-";
    cb(null, `${suffix}${file.originalname}`);
  },
});

// Filter file accept only JPEG and PNG
const filterPhoto = (req, file, cb) => {
  const photoTypes = ["image/jpeg", "image/png"];
  if (photoTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Only JPEG and PNG files are allowed."), false); // Reject file
  }
};

const upload = multer({
  storage,
  // fileFilter: filterPhoto,
  limits: { fileSize: 1024 * 1024 }, // Restrict file maximum 1 MB file allowed
});

router.post("/create", upload.single("photo"), createStudent);

module.exports = router;
