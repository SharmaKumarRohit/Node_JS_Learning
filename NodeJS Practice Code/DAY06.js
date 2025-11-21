// <------------ DAY06 ----------->
const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Import the router
const MenuItemRoutes = require("./routes/menuItemRoutes");

// use the router
app.use("/menu", MenuItemRoutes);

app.listen(3000, () => {
  console.log("Server runs on port 3000");
});
