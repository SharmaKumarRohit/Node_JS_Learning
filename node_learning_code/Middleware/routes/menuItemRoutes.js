const express = require("express");
const MenuItem = require("../models/MenuItem");

const router = express();

router.post("/", async (req, res) => {
  try {
    const menuData = req.body; // Assuming the request body contains menu item data
    const newMenuData = new MenuItem(menuData); // Create a new menu item using the Mongoose model(schema)
    const response = await newMenuData.save(); // Save the new menu item to the database
    console.log("Menu data saved");
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const menuData = await MenuItem.find(); // Use the Mongoose model to find all menu items in the database
    console.log("Fetched menu data");
    res.status(200).send(menuData); // Send the list of menu items as a JSON response
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const tasteType = req.params.taste;
    if (
      tasteType === "sweet" ||
      tasteType === "spicy" ||
      tasteType === "sour"
    ) {
      const menuItemData = await MenuItem.find({ taste: tasteType });
      console.log("Menu data fetched");
      res.status(200).send(menuItemData);
    } else {
      res.status(404).send({ error: "Invalid taste type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const menuData = req.body;
    const updatedMenuData = await MenuItem.findByIdAndUpdate(menuId, menuData, {
      new: true,
      runValidators: true,
    });
    if (!updatedMenuData) res.status(404).send({ error: "Menu not found" });
    console.log("Menu updated");
    res.status(200).send(updatedMenuData);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const deletedMenu = await MenuItem.findByIdAndDelete(menuId);
    if (!deletedMenu) res.status(404).send({ error: "Menu not found" });
    console.log("Menu deleted");
    res.status(200).send({ message: "Menu deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
