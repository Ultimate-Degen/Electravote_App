const express = require('express');
const router = express.Router();
const path = require('path');

// Adjusted path for Netlify Functions
router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../views/index'));
});

module.exports = router;
