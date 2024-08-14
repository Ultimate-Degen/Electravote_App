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

// Route to display the user's elections
router.get('/', (req, res) => {
    res.render('my-elections', { elections });
});

module.exports = router;
