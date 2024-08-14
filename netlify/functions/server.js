const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const ejs = require('ejs');
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../../public')));

// Set up view engine with absolute path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Root route to render the index.ejs view
app.get('/.netlify/functions/server/', (req, res) => {
    res.render('index');  // Rendering the index.ejs view
});

// Example of a secondary route
app.get('/.netlify/functions/server/test', (req, res) => {
    res.send('Test route is working!');
});

// Catch-all route for handling unknown paths
app.get('*', (req, res) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

module.exports.handler = serverless(app);
