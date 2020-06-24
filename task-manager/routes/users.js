var express = require('express');
var router = express.Router();
const userController = require('../src/controllers/UsersController')

router.get('/',userController.index)
router.get("/login", userController.login);
router.get("/create", userController.create)
router.post("/store", userController.store);
router.get('/user/:id',userController.show)
router.patch('/user/:id',userController.update)
module.exports = router;
