const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const productImages = req.files
      ? req.files.map((file) => ({
          url: `/uploads/product-images/${file.filename}`,
        }))
      : null;
    const newProduct = new Product({ name, price, category, productImages });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product create successfully", response: newProduct });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to create product", error: error.message });
  }
};
