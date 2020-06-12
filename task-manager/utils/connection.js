const MongoClient= require('mongodb').MongoClient;
const conn = {
	'user':'',
	'pwd' :'',
	'db':''
}
//const id =  ObjectId()
//console.log(id)
const uri = "mongodb+srv://"+conn.user+":"+conn.pwd+"@syscarcluster-ux8a6.mongodb.net/"+conn.db+"?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
if(err){
	return console.log('Unable to connect')
}

  const db = client.db(conn.db);
  const genre = db.collection('genres');
  /*
  db.collection("genres").insertOne({'name':'Commedy Funny'},(err,result)=>{
  	if(err){
  		return console.log('Unable to insert genre value')
  	}

  	console.log(result.ops)
  })*/
  /*
  genre.insertMany([
  	{'name':'Action I'},
  	{'name':'Action II'}
  	],(err,result)=>{
  		if(err){
  			return console.log('Unable to insert many genre values')
  		}
  		console.log(result.ops)
  	})
*/
/*
   genre.findOne({name:'action'},(err,genre)=>{
   		if(err){
   			return console.log('Unable to insert genre value')
   		}
   		console.log(genre)
   })*/
   /*
   
   genre.findOne({_id: '5eb459d726d0360a57c74bdb'},(err,res)=>{
    if(err){
      return console.log('Unable to fecht ');
    }
    console.log(res)
   })*/
  /*
   genre.find({name:'commedy'}).toArray((err,data)=>{
    console.log(data)
   })*/
/*
  genre.find({name: /Co/}).toArray((err,data)=>{
    console.log(data)
  })*/
  
  // perform actions on the collection object
  client.close();
});