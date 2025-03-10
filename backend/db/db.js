const mysql = require('mysql2');

// Database connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // MySQL user
    password: '', // MySQL password
    database: 'clothing_store'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('MySQL Connected!');
});

module.exports = db;
