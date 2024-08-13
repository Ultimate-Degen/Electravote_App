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

// Routes
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

app.use('/.netlify/functions/server/', indexRoute);
app.use('/.netlify/functions/server/create-election', require('../../routes/create-election'));
app.use('/.netlify/functions/server/voting', require('../../routes/voting'));
app.use('/.netlify/functions/server/results', require('../../routes/results'));
app.use('/.netlify/functions/server/my-elections', require('../../routes/my-ElectionsRoute'));
app.use('/.netlify/functions/server/voting-history', require ('../../routes/voting-historyRoute'));
app.use('/.netlify/functions/server/profile', require('../../routes/profileRoute'));
app.use('/.netlify/functions/server/settings', require('../../routes/settingsRoute'));
app.use('/.netlify/functions/server/dashboard', require('../../routes/dashboardRoute'));
app.use('/.netlify/functions/server/notifications', require('../../routes/notificationsRoute'));

module.exports.handler = serverless(app);
