const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("connected", () => console.log("Database connected"));
db.on("error", (error) => console.log("Error:", error));
db.on("disconnected", () => console.log("Database disconnected"));
