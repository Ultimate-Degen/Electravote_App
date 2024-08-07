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

let votes = [
    { electionId: 1, candidate: 'Candidate 1' },
    { electionId: 1, candidate: 'Candidate 2' },
    { electionId: 1, candidate: 'Candidate 2' },
    { electionId: 2, candidate: 'Candidate A' },
    { electionId: 2, candidate: 'Candidate B' },
    { electionId: 2, candidate: 'Candidate B' }
]; // In-memory store for votes

// Route to display the results page
router.get('/', (req, res) => {
    res.render('results', { elections });
});

// Route to get results data
router.get('/data', (req, res) => {
    const { electionId } = req.query;
    const election = elections.find(e => e.id == electionId);
    if (!election) {
        return res.status(404).json({ error: 'Election not found' });
    }

    const results = election.candidates.map(candidate => {
        return {
            candidate,
            votes: votes.filter(vote => vote.electionId == electionId && vote.candidate == candidate).length
        };
    });

    res.json(results);
});

module.exports = router;
