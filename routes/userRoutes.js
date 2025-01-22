const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Protected Route Example
// router.get('/profile', protect, (req, res) => {
//   res.json({ message: 'Profile data' });
// });

module.exports = router;
