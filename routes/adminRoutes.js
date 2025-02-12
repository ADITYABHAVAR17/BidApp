// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middlewares/auth');

// (Optional) Register a new admin (only needed if you want to allow admin signup)
// router.post('/register', adminController.registerAdmin);

// Admin login
router.post('/login', adminController.loginAdmin);

// Register a product for bidding (protected route)
router.post('/product', auth, adminController.registerProduct);

// View all bids for a given product (protected route)
router.get('/product/:productId/bids', auth, adminController.getProductBids);

module.exports = router;
