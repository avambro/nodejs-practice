const Task = require("../models/taskModel")

/* GET display tasls */
exports.index = async (req, res, next) => {
  const tasks = await Task.find({});
  if (tasks) {
    res.send(201).send(tasks);
  } else {
    res.status(500).send();
  }
};


exports.store = async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
}

// task/:id
exports.show = async (req, res) => {
  const _id = req.params.id;
  const task = await Task.findById(_id);
  if (task) {
    res.status(202).send(task);
  } else {
    res.status(500).send();
  }
};
