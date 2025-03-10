const app = require('./app'); // Import the app

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
