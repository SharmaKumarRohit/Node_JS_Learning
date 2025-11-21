const mongoose = require("mongoose");
require("dotenv").config();

// Define the MongoDB connection URL
const mongodbURL = process.env.MONGODB_URL;

// Set up MongoDB connection
// Enables TLS (Transport Layer Security), which means the connection is encrypted and secure (like HTTPS).
// don't use tls for local server, only use remote(host) server
// mongoose.connect(mongodbURL, { tls: true });
mongoose.connect(mongodbURL);

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
  console.log("connected to mongodb server");
});
db.on("error", (err) => {
  console.log("mongodb raise error", err);
});
db.on("disconnected", () => {
  console.log("mongodb server disconnected");
});

// Export the database connection
module.exports = db;
