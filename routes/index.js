const express = require('express');
const router = express.Router();
const path = require('path');

app.get('*', (req, res) => {
    res.render('index');  
});

module.exports = router;