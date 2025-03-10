const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products'); // Import product routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Clothing Store API!');
});

app.use('/products', productsRoutes); // Use product routes

module.exports = app;
