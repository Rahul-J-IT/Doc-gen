const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const odRoutes = require('./routes/odRoutes');
const authRoutes = require('./routes/auth')
const connectDB = require('./config/database');
require('dotenv').config();
const cookieParser = require('cookie-parser');

// Add this line before your routes



// Initialize the app
const app = express();

// Connect to the database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(cookieParser());

// Routes
app.use('/api', odRoutes);
app.use('/api', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
