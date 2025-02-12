// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Submit a bid (no authentication required)
router.post('/bid', userController.submitBid);

// Verify the bid OTP
router.post('/bid/verify', userController.verifyBid);

module.exports = router;
