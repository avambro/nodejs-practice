//const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");

//list users
exports.index = async (req, res, next) => {
  try {
    const users = await UserModel.find({});

    res.status(201).json(users)
    /*
    res.render("users/index", {
      title: "Users List",
      data: users,
    });*/

  } catch (e) {
    res.status(500).send(e);
  }
};

//* register
exports.create = (req, res) => {
  res.render("users/create", { title: "Sign up Users" });
};

//* save user
exports.store = async (req, res, next) => {

  /*
  const str = Math.random().toString(36).substring(2)
  const hassPwd = await bcrypt.hash(str,11)
  //compare
  //const isMatch = await bcrypt.compare(str,hassPwd)
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: str,
    age: req.body.age,
  });
  */
  const user = new UserModel(req.body)
  try {

    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

//* Display User information
exports.show = async (req, res, next) => {
  try {
    const userId = req.body.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status(400).send(e);
  }
};
/*
//* Update user
exports.update = async (req, res, next) => {
  const updateStream = Object.keys(req.body);
  const allowedFields = ["name", "email", "password", "age"];
  const isValidOperation = updateStream.every((update) => {
    allowedFields.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const user = await User.findByIdAndUpdate(req.param.id,{name:req.body},{new: true,runValidators: true});
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    return res.status(500).send();
  }
};
*/

// Update user by ID /users/:id
exports.update = async(req,res,next)=>{
   const updateStream = Object.keys(req.body);
   const allowedFields = ["name", "email", "password", "age"];
   const isValidOperation = updateStream.every((update) => {
     allowedFields.includes(update)
   });

   if (!isValidOperation) {
     return res.status(400).send({ error: "Invalid updates!" });
   }

   try {

         const user = await UserModel.findById(req.param.id);
           updateStream.forEach((update)=> user[update] = req.body[update]);

         if (!user) {
           return res.status(404).send();
         }
         res.send(user);
       } catch (e) {

   }


}


exports.login = async(req,res,next) => {
  try {
    const user = await UserModel.findByCredentials(req.body.email,req.body.password)
    const token = await UserModel.generateAuthToken()
    res.send({user,token})

  } catch (error) {
    res.status(400).send()
  }
}