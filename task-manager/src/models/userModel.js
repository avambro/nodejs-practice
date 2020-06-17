const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcryptjs");

const url =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@syscarcluster-ux8a6.mongodb.net/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true})




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
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
});

// middleware to save pwd as Hash
userSchema.pre('save', async function (next){
	const user = this

	if(user.isModified('password')){
		user.password = await bcrypt.hash(user.password,13)
	}


	next()

})


var userModel = mongoose.model('User',userSchema)


module.exports = userModel