// Design the Mongoose schema for a "Task" with fields for "title", "description", "priority", and "dueDate".

const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "medium",
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
