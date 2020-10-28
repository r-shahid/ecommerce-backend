require('dotenv').config();
const { PORT = 3000, NODE_ENV = 'development' } = process.env;
const mongoose = require('./db/connection');
const cors = require('cors');
const corsOptions = require('./configs/cors.js');
const express = require('express');
const app = express();
const morgan = require("morgan");

// product and reviews routes:
// const productRoutes = require('./controllers/productRoutes');
// const reviewRoutes = require('./controllers/reviewsRoutes');
const productrouter = require('./controllers/product')

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Default route
app.get('/', (req, res) => {
	res.json({ Welcome: 'Hello impulse shoppers!' });
});

app.use('/product', productrouter)

app.listen(PORT, () => {
	console.log(`You are listening on port ${PORT}`);
});

// middleware configuration? might need this later? no idea...
// app.use(logger('dev'));
// app.use(parser.json());

// app.use:
// app.use('/products', productRoutes);
// app.use('/reviews', reviewRoutes);

// Set the port and configure server to listen on that port
// app.set('port', PORT);


// heroku links:
