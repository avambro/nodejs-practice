var express = require('express');
var router = express.Router();
const User = require('../src/models/userModel')

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

/* POST inserting users . */
router.post('/user/create',(req,res,next)=>{
  const user = new User(req.body)
  user.save().then(()=>{
    res.status(201).send(user)
  }).catch((e)=>{
    res.status(400).send(e)
  })
})

router.get('/user/:id',(req,res,next)=>{
  User.findById({ _id: req.param.id })
    .then((user) => {
      if(!user){
        return res.status(404).send()
      }

      res.send(user)
    })
    .catch((e) => {
      res.status(400).send(e);
    });
})

module.exports = router;
