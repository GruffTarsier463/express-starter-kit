const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { validate, schemas } = require('../utils/validation');
const { getAllUsers, getUserById, updateProfile, deleteAccount } = require('../controllers/userController');

const router = express.Router();

// Get all users (public for demo, should be protected in real app)
router.get('/', getAllUsers);

// Get user by ID
router.get('/:id', validate(schemas.id, 'params'), getUserById);

// Update current user profile
router.put('/profile', authenticateToken, updateProfile);

// Delete current user account
router.delete('/account', authenticateToken, deleteAccount);

module.exports = router;