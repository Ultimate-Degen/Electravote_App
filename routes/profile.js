const express = require('express');
const router = express.Router();

let userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password', // In a real application, passwords should be hashed
    phone: '123-456-7890'
}; // Static user profile for now

// Route to display the profile page
router.get('/', (req, res) => {
    res.render('profile', { userProfile });
});

// Route to handle profile update form submission
router.post('/', (req, res) => {
    const { name, email, password, phone } = req.body;

    // Validate input
    if (!name || !email || !password || !phone) {
        return res.status(400).send('All fields are required.');
    }

    // Update user profile
    userProfile = { name, email, password, phone };

    // Redirect to a success page or render a success message
    res.redirect('/profile/success');
});

// Route to display success message
router.get('/success', (req, res) => {
    res.render('profile-success');
});

module.exports = router;
