var express = require("express");
var router = express.Router();
const Task = require("../src/models/taskModel");

/* GET users listing. */
router.get('/', async (req, res, next) => {

  const tasks = await Task.find({})
  if(tasks){
    res.send(201).send(tasks)
  }else{
    res.status(500).send();
  }

});


router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
      await task.save()
      res.status(201).send(task)
  } catch (e) {
      res.status(400).send(e)
  }

});


router.get("/view/:id", async (req, res) => {


  const _id = req.params.id;
  const task = await Task.findById(_id)
  if(task){
    res.status(202).send(task);
  }else{
    res.status(500).send();
  }

});

module.exports = router