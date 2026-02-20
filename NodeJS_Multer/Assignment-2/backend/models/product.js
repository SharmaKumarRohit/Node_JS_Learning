const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  category: { type: String },
  productImages: { type: Array },
});

module.exports = mongoose.model("Product", productSchema);
