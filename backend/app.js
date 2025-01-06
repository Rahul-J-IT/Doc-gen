const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const odRoutes = require('./routes/odRoutes');
const connectDB = require('./config/database');
require('dotenv').config();

// Initialize the app
const app = express();

// Connect to the database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', odRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
