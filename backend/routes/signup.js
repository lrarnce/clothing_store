const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db/db');

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password, email } = req.body;
    console.log("Received data:", req.body);

    // Check if all fields are provided
    if (!username || !password || !email) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Check if username already exists
        const checkUsernameQuery = 'SELECT * FROM users WHERE username = ?';
        const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';

        db.query(checkUsernameQuery, [username], (err, usernameResults) => {
            if (err) {
                console.error('Error checking for existing username:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            // If username already exists
            if (usernameResults.length > 0) {
                return res.status(400).json({ error: 'Username is already taken' });
            }

            // Check if email already exists
            db.query(checkEmailQuery, [email], (err, emailResults) => {
                if (err) {
                    console.error('Error checking for existing email:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }

                // If email already exists
                if (emailResults.length > 0) {
                    return res.status(400).json({ error: 'Email is already taken' });
                }

                // If no duplicates, hash the password and insert user
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                        console.error('Error hashing password:', err);
                        return res.status(500).json({ error: 'Internal Server Error' });
                    }

                    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
                    db.query(query, [username, hashedPassword, email], (err, results) => {
                        if (err) {
                            console.error('Error inserting into database:', err);
                            return res.status(500).json({ error: 'Internal Server Error' });
                        }

                        console.log("User registered successfully");
                        res.status(201).json({ message: 'User registered successfully' });
                    });
                });
            });
        });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
