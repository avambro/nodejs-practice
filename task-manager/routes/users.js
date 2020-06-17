var express = require('express');
var router = express.Router();
const userController = require('../src/controllers/usersController')

router.get('/',userController.index)
router.get("/register", userController.create)
router.post("/register", userController.store);
router.get('/user/:id',userController.show)
router.patch('/user/:id',userController.update)
module.exports = router;
