const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const taskModel = require("./TaskModel")
/*
const url =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@syscarcluster-ux8a6.mongodb.net/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true})

*/


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.length <= 10) {
        throw new Error("Password cannot contain less than 10 chars");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value <= 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
});


//* Set relation Task->User
userSchema.virtual('tasks',{
  ref:'TaskModel',
  localField:'_id',
  foreignField:'owner'
})


userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject()
  delete userObject.password
  delete userObject.tokens
  return userObject
}

//* Login user generate a token to auth
userSchema.methods.generateAuthtoken = async function(){
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, "mysaltstringexample");
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

userSchema.statics.findByCredentials = async (email,password)=>{
  const user =  await User.findOne({email})
  if(!user){
    throw new Error("Unable to login")
  }
  const isMatch = await bcrypt.compare(password,user.password)
  if(!isMatch){
    throw new Error("Unable to login.");
  }
  return user
}



//* middleware to save pwd as Hash
userSchema.pre('save', async function (next){
	const user = this

	if(user.isModified('password')){
		user.password = await bcrypt.hash(user.password,13)
	}


	next()

})

//* Delete user tasks when user is removed

userSchema.pre('removed',async (next)=>{
  const user = this
  await taskModel.deleteMany({owned:user._id})
  next()
})


var UserModel = mongoose.model('User',userSchema)
module.exports = UserModel