const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String, unique: true },
  phone: { type: String },
  address: { type: String },
  photo: { type: String },
});

module.exports = mongoose.model("Student", studentSchema);
