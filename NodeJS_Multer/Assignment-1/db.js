const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("connected", () => console.log("Database connected"));
db.on("error", (error) => console.log("Database connection error:", error));
db.on("disconnected", () => console.log("Database disconnected"));
