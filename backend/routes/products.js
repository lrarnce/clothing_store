const express = require('express');
const db = require('../db/db'); // Import the database connection

const router = express.Router();

// GET /products route to fetch all products
router.get('/', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results); // Send the results as JSON
        }
    });
});

// GET /products route to fetch product by id   
router.get('/:id', (req, res) => {
    const { id } = req.params;
 
    
    const query = 'SELECT * FROM products WHERE id = ?';
    
    db.query(query, [id], (err, results) => {
       
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Internal Server Error');
        } else if (results.length === 0) {
            res.status(404).send('Product not found');
        } else {
            res.json(results[0]); // Return the first product from the results
           
        }
    });
});

module.exports = router;
