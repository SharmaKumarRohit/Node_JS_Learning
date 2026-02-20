const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  photo: { type: String }, // store base64 encoded data
});

module.exports = mongoose.model("Student", studentSchema);
