const MongoClient= require('mongodb').MongoClient;

const url =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@syscarcluster-ux8a6.mongodb.net/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
if(err){
	return console.log('Unable to connect')
}

  const db = client.db(conn.db);
  const genre = db.collection('genres');

  client.close();
});