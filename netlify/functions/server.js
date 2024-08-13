const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../../public')));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Simple test route
app.get('/.netlify/functions/server/', (req, res) => {
    res.send('Root route is working!');
});

// Catch-all route
app.get('*', (req, res) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

module.exports.handler = serverless(app);
