const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON requests

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // MySQL user
    password: '', // MySQL password
    database: 'clothing_store'
});

db.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MySQL Connected!");
});

// Test Route
app.get("/", (req, res) => {
    res.send("Welcome to Clothing Store API!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
