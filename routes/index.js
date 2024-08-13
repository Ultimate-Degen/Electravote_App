const express = require('express');
const router = express.Router();
const path = require('path');

// Adjusted paths for Netlify Functions
const viewPath = path.join(__dirname, '../../views');
const staticPath = path.join(__dirname, '../../public');

router.get('/', (req, res) => {
    res.render(path.join(viewPath, 'index'));
});

module.exports = router;
