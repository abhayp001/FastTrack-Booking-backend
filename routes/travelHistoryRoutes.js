const express = require('express');
const { getTravelHistory } = require('../controllers/travelHistoryController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getTravelHistory); // Protect route with authMiddleware

module.exports = router;
