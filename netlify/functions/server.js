const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../../public')));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Render the index.ejs view on the root route
app.get('/.netlify/functions/server/', (req, res) => {
    res.render('index');  // Rendering the index.ejs view
});

// Catch-all route
app.get('*', (req, res) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

module.exports.handler = serverless(app);
