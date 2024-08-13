const express = require('express');
const router = express.Router();

let notifications = [
    { id: 1, message: 'Your election "Election 1" has ended.', date: '2024-08-11' },
    { id: 2, message: 'New vote cast in your election "Election 2".', date: '2024-08-12' },
    { id: 3, message: 'Your profile was updated successfully.', date: '2024-08-13' }
]; // Static notifications for now

// Route to display the notifications page
router.get('/', (req, res) => {
    res.render('notifications', { notifications });
});

module.exports = router;
