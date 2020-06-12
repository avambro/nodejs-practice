const mongoose = require('mongoose')
const validator = require('validator')
const conn = {
	'user':'',
	'pwd' :'',
	'db':'libraryCollection'
}
const url = "mongodb+srv://"+conn.user+":"+conn.pwd+"@syscarcluster-ux8a6.mongodb.net/"+conn.db+"?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true})
var userModel = mongoose.model('User', {
	name: {
		type:String,
		required: true,
		trim:true,
	},
	email: {
		type:String,
		required:true,
		trim:true,
		lowercase:true,
		validate(value){
			if(!validator.isEmail(value)){
				throw new Error('Email is invalid')
			}
		}
	},
	password:{
		type:String,
		required:true,
		minlength: 7,
		trim:true,
		validate(value){
			if(value.toLowerCase().include('password')){
				throw new Error('Password cannot contain "password"')
			}
		}
	},
	age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})


module.exports = userModel