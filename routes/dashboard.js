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
    { electionId: 1, candidate: 'Candidate 1', date: '2024-08-01' },
    { electionId: 1, candidate: 'Candidate 2', date: '2024-08-02' },
    { electionId: 2, candidate: 'Candidate A', date: '2024-08-11' },
    { electionId: 2, candidate: 'Candidate B', date: '2024-08-12' }
]; // In-memory store for votes

// Route to display the dashboard page
router.get('/', (req, res) => {
    const recentElections = elections.slice(-5); // Get the last 5 elections
    const recentVotes = votes.slice(-5); // Get the last 5 votes

    res.render('dashboard', { recentElections, recentVotes });
});

module.exports = router;
