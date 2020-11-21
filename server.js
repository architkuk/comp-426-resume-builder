const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const uri =
	'mongodb+srv://dbUser:6unN2a7qWUwKTFpF@resume-data.6jeoc.mongodb.net/resume-builder?retryWrites=true&w=majority';

const app = express();
const port = 8080;

MongoClient.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then((client) => {
	const db = client.db('resume-data');

	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept, Authorization'
		);
		next();
	});
	app.use(express.json());

	// get user info from database
	app.get('/', (req, res) => {
		db.collection('users')
			.find()
			.toArray()
			.then((response) => {
				res.send(response);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	// add new user into database
	app.post('/', (req, res) => {
		console.log(req.body.name);
		db.collection('users').insertOne(req.body);
		res.send('success');
	});

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});
});
