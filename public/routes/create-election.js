const express = require('express');
const router = express.Router();

let elections = []; // In-memory store for election data

// Route to display the election creation form
router.get('/', (req, res) => {
    res.render('create-election');
});

// Route to handle election creation form submission
router.post('/', (req, res) => {
    const { electionName, startDate, endDate, candidates, description } = req.body;

    // Validate input
    if (!electionName || !startDate || !endDate || !candidates || !description) {
        return res.status(400).send('All fields are required.');
    }

    // Create election object
    const newElection = {
        id: elections.length + 1,
        name: electionName,
        startDate,
        endDate,
        candidates: candidates.split('\n').map(candidate => candidate.trim()), // Split candidates by newline
        description
    };

    // Save election
    elections.push(newElection);

    // Redirect to a success page or render a success message
    res.redirect('/create-election/success');
});

// Route to display success message
router.get('/success', (req, res) => {
    res.render('election-success');
});

module.exports = router;
