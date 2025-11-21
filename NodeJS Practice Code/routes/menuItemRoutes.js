const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Question 1: Create a parameterized GET Method API for the Menu Item on the Basis of
// taste Type via using Express Router
// ( /menu/:taste )

// solution
// parameterized GET method API
router.get("/:taste", async (req, res) => {
  try {
    const tasteType = req.params.taste; // Extract the taste type from the URL parameter
    if (
      tasteType === "sweet" ||
      tasteType === "spicy" ||
      tasteType === "sour"
    ) {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Taste type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Question 2: Create a PUT Method API to update the MenuItem Records ( menu/:id )

// solution
// Update Menu Item method API
router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id; // Extract the id of Menu Item from the URL parameter
    const updatedMenuData = req.body; // Updated data from the Menu Item
    const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });
    if (!response) {
      return res.status(404).json({ error: "Menu Item not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Question 3: Create a DELETE Method API to delete the MenuItem Records ( menu/:id )

// solution
// Delete Menu Item Method API
router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id; // Extract the Menu's ID from the URL parameter
    // Assuming you have a MenuItem model
    const response = await MenuItem.findByIdAndDelete(menuId);
    if (!response) {
      return res.status(404).json({ error: "Menu Item not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Menu Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
