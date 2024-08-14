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

// Example blockchain stats and zk-proof status
let blockchainStats = {
    height: 5000,
    timestamp: '2024-08-14T12:00:00Z',
    transactions: 120
};

let zkProofStatus = "All zk-SNARK verifications are up-to-date and valid.";

// Example total votes cast and voter turnout
let totalVotesCast = votes.length; // Define totalVotesCast here
let totalVoters = 100; // This would be dynamic in a real system
let voterTurnout = (totalVotesCast / totalVoters) * 100;

// Route to display the dashboard page
router.get('/', (req, res) => {
    const recentElections = elections.slice(-5); // Get the last 5 elections
    const recentVotes = votes.slice(-5); // Get the last 5 votes

    res.render('dashboard', {
        recentElections,
        recentVotes,
        blockchainStats,
        zkProofStatus,
        totalVotesCast,  // Pass totalVotesCast to the template
        voterTurnout
    });
});

module.exports = router;
