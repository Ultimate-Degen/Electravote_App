const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('index'); // Render the "index.ejs" view
});

module.exports = router;
