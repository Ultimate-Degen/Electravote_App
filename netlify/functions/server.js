const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the correct directory
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/images', express.static(path.join(__dirname, '../public/images')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Routes
const indexRoute = require('./routes/index');
const createElectionRoute = require('./routes/create-election');
const votingRoute = require('./routes/voting');
const resultsRoute = require('./routes/results');
const myElectionsRoute = require('./routes/my-elections');
const votingHistoryRoute = require('./routes/voting-history');
const profileRoute = require('./routes/profile');
const settingsRoute = require('./routes/settings');
const dashboardRoute = require('./routes/dashboard');
const notificationsRoute = require('./routes/notifications');

// Use routes
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

module.exports.handler = serverless(app);
