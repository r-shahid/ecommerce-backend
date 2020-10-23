require('dotenv').config();
const { PORT = 3000, NODE_ENV = 'development' } = process.env;

// const mongoose = require('./db/connection');

const cors = require('cors');
// const corsOptions = require('./configs/cors.js');

const express = require('express');
const app = express();

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors()) //anybody can make a request
app.use(express.json());
// app.use(morgan("tiny")); //logging

// middleware configuration? might need this later? no idea...
// app.use(logger('dev'));
// app.use(parser.json());
app.use(cors());

// Default route
app.get('/', (req, res) => {
	res.json({ Welcome: 'Hello impulse shoppers!' });
});

// product and reviews routes:

// app.use:


// Set the port and configure server to listen on that port
app.set('port', PORT);
app.listen(PORT, () => {
	console.log(`Your are listening on port ${PORT}`);
});

// heroku links:
