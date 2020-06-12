var express = require("express");
var router = express.Router();
const Task = require("../src/models/taskModel");

/* GET users listing. */
router.get('/', function(req, res, next) {

  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(500).send();
    });
});


router.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  Task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});


router.get("/view/:id", (req, res) => {


  const _id = req.params.id;

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }

      res.send(task);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

module.exports = router