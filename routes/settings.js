const express = require('express');
const router = express.Router();

let userSettings = {
    notifications: true,
    darkMode: false
}; // Static user settings for now

// Route to display the settings page
router.get('/', (req, res) => {
    res.render('settings', { userSettings });
});

// Route to handle settings update form submission
router.post('/', (req, res) => {
    const { notifications, darkMode } = req.body;

    // Update user settings
    userSettings.notifications = notifications === 'on';
    userSettings.darkMode = darkMode === 'on';

    // Redirect to a success page or render a success message
    res.redirect('/settings/success');
});

// Route to display success message
router.get('/success', (req, res) => {
    res.render('settings-success');
});

module.exports = router;
