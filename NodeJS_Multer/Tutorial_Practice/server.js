const express = require("express");
const app = express();
require("dotenv").config();
require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT;

// Import the route files
const studentRoute = require("./routes/studentRoute");

// Use the routers
app.use("/student", studentRoute);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
