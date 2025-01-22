const express = require('express');
const { createTravelRequest, getTravelRequestStatus } = require('../controllers/travelRequestController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTravelRequest); // Protect route with authMiddleware
router.get('/', authMiddleware, getTravelRequestStatus); // Protect route with authMiddleware

module.exports = router;
