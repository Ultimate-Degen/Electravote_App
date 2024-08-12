
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../public')));

// Inline view
const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElectraVote - Secure, Transparent, Scalable Voting</title>
</head>
<body>
    <h1>Welcome to ElectraVote</h1>
    <p>Secure, Transparent, and Scalable Voting for the Digital Age</p>
</body>
</html>
`;

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));
//app.set('views', path.join(__dirname, 'views'));
console.log('views directory:', __dirname, 'views');

// Routes
app.get('/', (req, res) => {
    res.send(indexHtml);
  });
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
const fs = require('fs');

console.log('Current directory:', __dirname);
console.log('Views directory:', path.join(__dirname, 'views'));
console.log('Files in views directory:', fs.readdirSync(path.join(__dirname, 'views')));