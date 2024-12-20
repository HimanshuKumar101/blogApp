const express = require("express");
const app = express();
require("dotenv").config(); // Corrected dotenv import

// Get PORT from .env file or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const blog = require("./routes/blog");

// Mount routes
app.use("/api/v1", blog);

// DB connection
const connectWithDb = require("./config/database");
connectWithDb();

// Start the server
app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`);
});

// Default route
app.get("/", (req, res) => {
    res.send(`<h1>Virat Kohli is The Goat</h1>`);
});
