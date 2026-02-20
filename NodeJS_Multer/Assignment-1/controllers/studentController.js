const Student = require("../models/student");

exports.createStudent = async (req, res) => {
  try {
    const { name, age, email, phone, address } = req.body;
    const photoPath = req.file
      ? `/uploads/profile-pics/${req.file.filename}`
      : null;
    console.log(`Photo image URL: ${photoPath}`);
    const newStudent = new Student({
      name,
      age,
      email,
      phone,
      address,
      photo: photoPath,
    });
    await newStudent.save();
    res
      .status(201)
      .json({ message: "Student create successfully", response: newStudent });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ error: error.message, message: "Failed to register student" });
  }
};
