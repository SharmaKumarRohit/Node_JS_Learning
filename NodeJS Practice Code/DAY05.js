// <------------ DAY05 ------------>
const express = require("express");
const app = express();
const db = require("./db");
const MenuItem = require("./models/MenuItem");
const Task = require("./models/Task");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Question 1: Create a POST Method API
// Create a POST method API to store data or menu items as per the schema we discussed ( /menu )

// solution
// POST method API to store data or menu items as per the schema we discussed on /menu
app.post("/menu", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains menu item data
    const newMenuItem = new MenuItem(data); // Create a new menu item using the Mongoose model
    const response = await newMenuItem.save(); // Save the new menu item to the database
    console.log("Menu data saved");
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Question 2: Create a GET Method API
// Create a GET method API to List down the All Menu Items as per the schema we discussed ( /menu )

// solution
// GET method API to List down the All Menu Items as per schema we discussed on /menu
app.get("/menu", async (req, res) => {
  try {
    // Use the Mongoose model to find all menu items in the database
    const menuData = await MenuItem.find();
    // Send the list of menu items as a JSON response
    console.log("Data fetched");
    res.status(201).json(menuData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Question 3: Creating a POST API with Express and Mongoose
// You're building a simple task management application. Your task is to create a POST API endpoint for adding
// new tasks to the database. Assume you've already set up an Express application and connected it to your
// MongoDB using Mongoose.
// a) Design the Mongoose schema for a "Task" with fields for "title," "description," "priority," and "dueDate."

// solution
// This question solution on Task.js file

// b) Create a POST API endpoint /api/tasks that allow clients to submit new tasks to the database. Ensure it
// handles request validation and responds with the newly created task.

// solution
app.post("/task", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Question 4: Creating a GET API with Express and Mongoose
// Continuing with the task management application, you need to create a GET API endpoint for retrieving a list of
// tasks from the database.
// Create a GET API endpoint /api/tasks that retrieve a list of all tasks from the database. Ensure it handles
// errors and responds with the list of tasks in JSON format.

// solution
app.get("/task", async (req, res) => {
  try {
    const taskData = await Task.find();
    res.status(200).send(taskData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Server runs on port 3000");
});
