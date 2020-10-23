require('dotenv').config();

const { MONGODBURI } = process.env;
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;

// i dont have the config setup yet:
mongoose.connect(MONGODBURI, config);

DB.on('open', () => console.log('You are connected to Mongo'))
	.on('close', () => console.log('You are disconnected to Mongo'))
	.on('error', (err) => console.log(err));

module.exports = mongoose;
