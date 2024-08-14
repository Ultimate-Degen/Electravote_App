const express = require('express');
const router = express.Router();

let votes = [
    { electionId: 1, candidate: 'Candidate 1', date: '2024-08-01' },
    { electionId: 1, candidate: 'Candidate 2', date: '2024-08-02' },
    { electionId: 2, candidate: 'Candidate A', date: '2024-08-11' },
    { electionId: 2, candidate: 'Candidate B', date: '2024-08-12' }
]; // In-memory store for votes

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

// Route to display the user's voting history
router.get('/', (req, res) => {
    const votingHistory = votes.map(vote => {
        const election = elections.find(e => e.id === vote.electionId);
        return {
            ...vote,
            electionName: election ? election.name : 'Unknown Election'
        };
    });

    res.render('voting-history', { votingHistory });
});

module.exports = router;
