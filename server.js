require('dotenv').config();
const { PORT = 3000, NODE_ENV = 'development' } = process.env;

const mongoose = require('./db/connection');
const cors = require('cors');
const corsOptions = require('./configs/cors.js');

const express = require('express');
const app = express();

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors()) //anybody can make a request
app.use(express.json());

// middleware configuration? might need this later? no idea...
// app.use(logger('dev'));
// app.use(parser.json());

// Default route
app.get('/', (req, res) => {
	res.json({ Welcome: 'Hello impulse shoppers!' });
});

// product and reviews routes:
 const productRoutes = require('./controllers/productRoutes');
 const reviewRoutes = require('./controllers/reviewsRoutes');

 
// app.use:
app.use('/products', productRoutes);
app.use('/reviews', reviewRoutes);

// Set the port and configure server to listen on that port
app.set('port', PORT);
app.listen(PORT, () => {
	console.log(`Your are listening on port ${PORT}`);
});

// heroku links:
