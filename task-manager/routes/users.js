var express = require('express');
var router = express.Router();
const User = require('../src/models/userModel')

/* GET users listing. */
router.get('/', async (req, res, next) => {

  try {
    const users = await User.find({})
    res.send(users)

  } catch (e) {
    res.status(500).send(e)
  }

});

router.get('/register', (req, res) => {

    res.render('users/register', { title: 'Sign up Users' });
});

/* POST inserting users . */
router.post('/register', async (req,res,next)=>{

    const user = new User(req.body);
    try {
      await user.save()
      res.status(201).send(user)
    } catch (e) {

    }

})

router.get('/user/:id',async (req,res,next)=>{

   try {
     const userId = req.body.id
     const user = await User.findById(userId)
     if(!user){
       return res.status(404).send()
     }

   } catch (e) {
     res.status(400).send(e);
   }

})


router.patch('/user/:id',async(req,res,next)=>{
  const updateStream = Object.keys(req.body)
  const allowedFields = ['name','email','password','age']
  const isValidOperation = updateStream.every((update) =>{
    allowedFields.includes(update)
  })
  if(!isValidOperation){
    return res.status(400).send({error:'Invalid updates!'})
  }
  try {
      const user = await User.findByIdAndUpdate(
        req.param.id,
        {name:req.body},
        {
          new : true,
          runValidators: true
        })
        if(!user){
          return res.status(404).send()
        }
        res.send(user);
  } catch (e) {
      return res.status(500).send()
  }
})


module.exports = router;
