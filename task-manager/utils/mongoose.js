const mongoose =  require('mongoose')
const validator = require('validator')
const conn = {
	'user':'',
	'pwd' :'',
	'db':''
}
const url = "mongodb+srv://"+conn.user+":"+conn.pwd+"@syscarcluster-ux8a6.mongodb.net/"+conn.db+"?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true})
/*
const authorModel = mongoose.model('authors',{
	first_name: {type:String,required:true},
	family_name: String,
	date_of_birth: Date,
	email:{
		type:String,
		required:true,
		validate(val){
			if(!validator.isEmail(val)){
				throw new Error('Email is invalid')
			}
		}
	}
})


const author = new authorModel({
	first_name: 'John 2',
	family_name: 'Wick',
	date_of_birth: new Date(),
	email:'email'
})

author.save().then((res)=>{
	console.log('Author Save')
	console.log(res)
}).catch((err)=>{
	console.log('Error ',err)
})


const TaskModel = mongoose.model('Task',{
	description:String,
	completed:Boolean
})

const task = new TaskModel({
	description:'Meeting today at 09am',
	completed:false
})
.save()
.then((res)=>{
	console.log('task saved')
})
.catch((err)=>{
	console.log('task couldnt save ')
})
*/