const express = require("express");
const Student = require("../models/student");

const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get("/", (req, res) => {
  res.send("hello world");
});

//Create new user
router.get("/", () => {
  console.log(Hello);
});

router.post("/student", async (req, res) => {
  const { name, email, regNum } = req.body;
  try {
    const student = new Student({ name, email, regNum });
    await student.save();
    res.send(student);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Get all student
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Update a user
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, regNum } = req.body;

  try {
    const student = await Student.findByIdAndUpdate(
      id,
      { name, email, regNum },
      { new: true }
    );
    res.send(student);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Delete user
router.delete("/students/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByIdAndDelete(id);
    res.send(student);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
