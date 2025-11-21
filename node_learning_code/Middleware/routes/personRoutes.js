const express = require("express");
const Person = require("../models/Person");
const router = express();

// POST route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// GET method to get the person
router.get("/", async (req, res) => {
  try {
    const personData = await Person.find();
    console.log("data fetched");
    res.status(200).send(personData);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Extract the work type from the URL parameter
    if (
      workType === "chef" ||
      workType === "waiter" ||
      workType === "manager"
    ) {
      const personData = await Person.find({ work: workType });
      console.log("person data fetched");
      res.status(200).send(personData);
    } else {
      res.status(404).send({ error: "Invalid Work Type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the id from the URL parameter
    const personUpdatedData = req.body; // Get which data update for the person
    const updatedData = await Person.findByIdAndUpdate(
      personId,
      personUpdatedData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );
    // if updatedData not found
    if (!updatedData) res.status(404).send({ error: "Person not found" });
    console.log("Person data updated");
    res.status(200).send({ updatedData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter
    const deletedData = await Person.findByIdAndDelete(personId); // Assuming you have a Person model
    if (!deletedData) res.status(404).send({ error: "Person not found" });
    console.log("person document deleted");
    res.status(200).send({ message: "Person deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
