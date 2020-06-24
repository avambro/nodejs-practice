var express = require("express");
var router = express.Router();

const taskController = require('../src/controllers/TasksController')

/* GET users listing. */
router.get('/', taskController.index);
router.post("/store",taskController.store);
router.get("/show/:id", taskController.show);
router.patch('/update/:id',taskController.update)
module.exports = router