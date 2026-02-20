const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const productImageDirPath = path.join(__dirname, "../uploads/product-images");

if (!fs.existsSync(productImageDirPath)) {
  fs.mkdirSync(productImageDirPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, productImageDirPath);
  },
  filename: (req, file, cb) => {
    const suffix = Date.now() + "-";
    cb(null, suffix + file.originalname);
  },
});

const filterProductImages = (req, file, cb) => {
  const allowImageType = ["image/jpeg", "image/png"];
  if (allowImageType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG and PNG files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter: filterProductImages,
  limits: { files: 5 },
});

router.post("/create", upload.array("images", 5), createProduct);

module.exports = router;
