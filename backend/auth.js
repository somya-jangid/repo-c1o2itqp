const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    // Handle login logic
    res.send('Login route');
});

router.post('/signup', (req, res) => {
    // Handle signup logic
    res.send('Signup route');
});

module.exports = router;