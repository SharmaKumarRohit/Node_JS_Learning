const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected");
});

db.on("error", () => {
  console.log("Database give some error");
});

db.on("disconnected", () => {
  console.log("Database disconnected");
});

module.exports = db;
