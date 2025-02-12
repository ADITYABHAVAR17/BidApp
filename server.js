// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config({ path: "./config/config.env" });

// Connect to the database
connectDB();

// Initialize middleware to parse JSON bodies
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api', require('./routes/userRoutes'));

// A simple route for testing
app.get('/', (req, res) => res.send('Bidding App API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
