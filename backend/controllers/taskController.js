const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {}
};
exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.statuts(500).json({ msg: error.msg });
  }
};

exports.getTask = async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`NO task with this id`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
  //   res.send(req.params.id);
};
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json(`NO task with this id`);
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.updateTask = async (req, res) => {
  // try with patch method
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(task);
    if (!task) {
      res.status(404).json(`NO task with this id`);
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// module.exports = { createTask, getAllTask, getTask, deleteTask };
