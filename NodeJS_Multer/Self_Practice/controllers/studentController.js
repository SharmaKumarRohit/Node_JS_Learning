const Student = require("../models/student");

exports.createStudent = async (req, res) => {
  try {
    const { name, age, email, phone, address } = req.body;
    // const photoPath = req.file ? req.file.path : null; // Get the file path if uploaded
    const photoBase64 = req.file ? req.file.buffer.toString("base64") : null;
    // console.log("All req file data:", req.file);
    // console.log("Buffer data:", req.file.buffer);

    // Create student record with Base46-encoded image
    const newStudent = new Student({
      name,
      age,
      email,
      phone,
      address,
      // photo: photoPath,
      photo: photoBase64,
    });
    await newStudent.save();
    res
      .status(201)
      .json({ message: "Student created successfully", response: newStudent });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: error.message,
      message: "Error occurred to creating student record",
    });
  }
};
