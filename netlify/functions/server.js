const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRoute = require('./public/routes/index');
const createElectionRoute = require('./public/routes/create-election');
const votingRoute = require('./public/routes/voting');
const resultsRoute = require('./public/routes/results');
const myElectionsRoute = require('./public/routes/my-elections');
const votingHistoryRoute = require('./public/routes/voting-history');
const profileRoute = require('./public/routes/profile');
const settingsRoute = require('./public/routes/settings');
const dashboardRoute = require('./public/routes/dashboard');
const notificationsRoute = require('./public/routes/notifications');

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
