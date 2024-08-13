const express = require('express');
const router = express.Router();

let elections = [
    {
        id: 1,
        name: 'Election 1',
        startDate: '2024-08-01',
        endDate: '2024-08-10',
        candidates: ['Candidate 1', 'Candidate 2', 'Candidate 3'],
        description: 'Description of Election 1'
    },
    {
        id: 2,
        name: 'Election 2',
        startDate: '2024-08-11',
        endDate: '2024-08-20',
        candidates: ['Candidate A', 'Candidate B', 'Candidate C'],
        description: 'Description of Election 2'
    }
]; // In-memory store for elections

let votes = []; // In-memory store for votes

// Route to display the voting form
router.get('/', (req, res) => {
    res.render('voting', { elections });
});

// Route to handle voting form submission
router.post('/', (req, res) => {
    const { election, candidate } = req.body;

    // Validate input
    if (!election || !candidate) {
        return res.status(400).send('All fields are required.');
    }

    // Record vote
    const newVote = {
        electionId: parseInt(election),
        candidate
    };
    votes.push(newVote);

    // Redirect to a success page or render a success message
    res.redirect('/voting/success');
});

// Route to display success message
router.get('/success', (req, res) => {
    res.render('vote-success');
});

module.exports = router;
