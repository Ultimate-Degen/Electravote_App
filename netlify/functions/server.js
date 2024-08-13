const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const ejs = require('ejs');
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../../public')));

// View Engine setup
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

// Route handling
app.use('/', indexRoute);
app.use('/create-election', createElectionRoute);
app.use('/voting', votingRoute);
app.use('/results', resultsRoute);
app.use('/my-elections', myElectionsRoute);
app.use('/voting-history', votingHistoryRoute);
app.use('/profile', profileRoute);
app.use('/settings', settingsRoute);
app.use('/dashboard', dashboardRoute);
app.use('/notifications', notificationsRoute);

// Catch-all route
app.get('*', (req, res) => {
    res.render('index');  // Changed from sendFile to render
});

// 404 Error handler
app.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

module.exports.handler = serverless(app);