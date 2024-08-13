const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../../public')));

// View Engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Root route
const indexRoute = require('../../routes/index');

app.use('/.netlify/functions/server/', indexRoute); // This handles the root URL

// Other routes
app.use('/.netlify/functions/server/create-election', require('../../routes/create-election'));
app.use('/.netlify/functions/server/voting', require('../../routes/voting'));
app.use('/.netlify/functions/server/results', require('../../routes/results'));
app.use('/.netlify/functions/server/my-elections', require('../../routes/my-elections'));
app.use('/.netlify/functions/server/voting-history', require('../../routes/voting-history'));
app.use('/.netlify/functions/server/profile', require('../../routes/profile'));
app.use('/.netlify/functions/server/settings', require('../../routes/settings'));
app.use('/.netlify/functions/server/dashboard', require('../../routes/dashboard'));
app.use('/.netlify/functions/server/notifications', require('../../routes/notifications'));

module.exports.handler = serverless(app);
