const express = require('express');
const router = express.Router();

//router.get('/', (req, res) => {
//    res.render('index.ejs');
//});

//module.exports = router;

router.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ElectraVote - Home</title>
      </head>
      <body>
          <h1>Welcome to ElectraVote</h1>
          <nav>
              <ul>
                  <li><a href="/create-election">Create Election</a></li>
                  <li><a href="/voting">Voting</a></li>
                  <li><a href="/results">Results</a></li>
                  <!-- Add more navigation items as needed -->
              </ul>
          </nav>
      </body>
      </html>
    `);
  });
  
  module.exports = router;