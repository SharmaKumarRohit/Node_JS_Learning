const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");
require("dotenv").config();
const passport = require("./auth");

const app = express();
app.use(bodyParser.json()); // req.body
const port = process.env.PORT || 3000;

// Middleware function
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request made to: ${req.originalUrl}`
  );
  next(); // Move on to the next phase
};

// Apply middleware to all Routes
// app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", (req, res) => {
  res.send("Welcome to our hotel");
});

// Import the router files
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuItemRoutes");

// Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(port, () => {
  console.log("Server running on port 3000");
});
