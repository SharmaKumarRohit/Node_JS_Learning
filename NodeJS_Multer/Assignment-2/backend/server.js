const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const productRoute = require("./routes/productRoute");

app.use("/product", productRoute);

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  } else {
    return res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server is listening on port http://localhots:${PORT}`),
);
