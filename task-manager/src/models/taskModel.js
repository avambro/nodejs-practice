const mongoose = require('mongoose')

const conn = {
	'user':'',
	'pwd' :'',
	'db':'libraryCollection'
}
const url = "mongodb+srv://"+conn.user+":"+conn.pwd+"@syscarcluster-ux8a6.mongodb.net/"+conn.db+"?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true})
var taskModel = mongoose.model('Tasks', {
	description: {
		required: true,
		type: String,
		trim: true,		
	},
	completed: {
		type: Boolean,
		default: false
	}
})


module.exports = taskModel