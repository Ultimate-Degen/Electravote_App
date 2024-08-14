const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const ejs = require('ejs');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../../public')));

// Set up view engine with correct paths
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Import routes
const indexRoute = require('../../routes/index');
const createElectionRoute = require('../../routes/create-election');
const votingRoute = require('../../routes/voting');
const resultsRoute = require('../../routes/results');
const myElectionsRoute = require('../../routes/my-elections');
const votingHistoryRoute = require('../../routes/voting-history');
const profileRoute = require('../../routes/profile');
const settingsRoute = require('../../routes/settings');
const dashboardRoute = require('../../routes/dashboard');
const notificationsRoute = require('../../routes/notifications');

// Correctly configure the base route
app.use('/.netlify/functions/server/', indexRoute);
app.use('/.netlify/functions/server/create-election', createElectionRoute);
app.use('/.netlify/functions/server/voting', votingRoute);
app.use('/.netlify/functions/server/results', resultsRoute);
app.use('/.netlify/functions/server/my-elections', myElectionsRoute);
app.use('/.netlify/functions/server/voting-history', votingHistoryRoute);
app.use('/.netlify/functions/server/profile', profileRoute);
app.use('/.netlify/functions/server/settings', settingsRoute);
app.use('/.netlify/functions/server/dashboard', dashboardRoute);
app.use('/.netlify/functions/server/notifications', notificationsRoute);

// Catch-all route for handling unknown paths
app.get('/.netlify/functions/server/*', (req, res) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

// Export the serverless function
module.exports.handler = serverless(app);
