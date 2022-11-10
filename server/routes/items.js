const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

//GET request
router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(404).json({ notasksfound: "No tasks found" }));
});

//POST request
router.post("/", (req, res) => {
  Task.create(req.body)
    .then((tasks) => res.json({ msg: "Task Added Successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this task" }));
});

//DELETE request
router.delete("/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id, req.body)
    .then((task) => res.json({ msg: "Task deleted successfully" }))
    .catch((err) => res.json(404).json({ error: "No Such Task" }));
});

module.exports = router;
