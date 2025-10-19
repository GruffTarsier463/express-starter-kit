const express = require('express');
const { validate, schemas } = require('../utils/validation');
const { authenticateToken } = require('../middleware/auth');
const { authLimiter } = require('../middleware/security');
const { register, login, getProfile } = require('../controllers/authController');

const router = express.Router();

// Register new user
router.post('/register', authLimiter, validate(schemas.registerUser), register);

// Login user
router.post('/login', authLimiter, validate(schemas.loginUser), login);

// Get current user profile (protected route)
router.get('/profile', authenticateToken, getProfile);

module.exports = router;