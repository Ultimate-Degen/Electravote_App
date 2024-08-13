const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../../public')));

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Define a simple root route to test
app.get('/.netlify/functions/server/', (req, res) => {
    res.render('index'); // Render the index.ejs view
});

// Other routes
app.use('/.netlify/functions/server/create-election', require('../../routes/create-election'));
app.use('/.netlify/functions/server/voting', require('../../routes/voting'));
app.use('/.netlify/functions/server/results', require('../../routes/results'));
// Add other routes as needed

// Export the serverless function
module.exports.handler = serverless(app);
